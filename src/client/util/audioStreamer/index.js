import Socket from 'socket.io-client';
const socket = Socket('http://localhost:5000');

// Stream Audio
let bufferSize = 2048,
    AudioContext,
    context,
    processor,
    input,
    globalStream;

//audioStream constraints
const constraints = {
    audio: true,
    video: false
};

let AudioStreamer = {
    /**
     * @param {function} onData Callback to run on data each time it's received
     * @param {function} onError Callback to run on an error if one is emitted.
     */
    initRecording: function(streamId, onData, onError) {
        socket.emit('startGoogleCloudStream', {
          googleApi: {
            config: {
              encoding: 'LINEAR16',
              sampleRateHertz: 16000,
              languageCode: 'pt-BR',
              profanityFilter: false,
              enableWordTimeOffsets: true
            },
            interimResults: true // If you want interim results, set this to true
          },
          id: streamId,
        }); //init socket Google Speech Connection
        AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        processor = context.createScriptProcessor(bufferSize, 1, 1);
        processor.connect(context.destination);
        context.resume();

        var handleSuccess = function (stream) {
            globalStream = stream;
            input = context.createMediaStreamSource(stream);
            input.connect(processor);

            processor.onaudioprocess = function (e) {
                microphoneProcess(e);
            };
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(handleSuccess);

        // Bind the data handler callback
        if(onData) {
            socket.on('speechData', (data) => {
                onData(data);
            });
        }

        socket.on('googleCloudStreamError', (error) => {
            if(onError) {
                onError('error');
            }
            // We don't want to emit another end stream event
            closeAll();
        });
    },

    stopRecording: function() {
        socket.emit('endGoogleCloudStream', '');
        closeAll();
    }
}

export default AudioStreamer;

// Helper functions
/**
 * Processes microphone data into a data stream
 * 
 * @param {object} e Input from the microphone
 */
function microphoneProcess(e) {
    var left = e.inputBuffer.getChannelData(0);
    var left16 = convertFloat32ToInt16(left);
    socket.emit('binaryAudioData', left16);
}

/**
 * Converts a buffer from float32 to int16. Necessary for streaming.
 * sampleRateHertz of 1600.
 * 
 * @param {object} buffer Buffer being converted
 */
function convertFloat32ToInt16(buffer) {
    let l = buffer.length;
    let buf = new Int16Array(l / 3);

    while (l--) {
        if (l % 3 === 0) {
            buf[l / 3] = buffer[l] * 0xFFFF;
        }
    }
    return buf.buffer
}

/**
 * Stops recording and closes everything down. Runs on error or on stop.
 */
function closeAll() {
    // Clear the listeners (prevents issue if opening and closing repeatedly)
    socket.off('speechData');
    socket.off('googleCloudStreamError');
    let tracks = globalStream ? globalStream.getTracks() : null; 
        let track = tracks ? tracks[0] : null;
        if(track) {
            track.stop();
        }

        if(processor) {
            if(input) {
                try {
                    input.disconnect(processor);
                } catch(error) {
                    console.warn('Attempt to disconnect input failed.')
                }
            }
            processor.disconnect(context.destination);
        }
        if(context) {
            context.close().then(function () {
                input = null;
                processor = null;
                context = null;
                AudioContext = null;
            });
        }
}