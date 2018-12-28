import Socket from 'socket.io-client';

const socketURl = process.env.SOCKET_URL;
const socket = Socket(socketURl);

// Stream Audio
const bufferSize = 2048;
let AudioContext;
let context;
let processor;
let input;
let globalStream;

// Helper functions

/**
 * Converts a buffer from float32 to int16. Necessary for streaming.
 * sampleRateHertz of 1600.
 *
 * @param {object} buffer Buffer being converted
 */
function convertFloat32ToInt16(buffer) {
  let l = buffer.length;
  const buf = new Int16Array(l / 3);

  while (l--) {
    if (l % 3 === 0) {
      buf[l / 3] = buffer[l] * 0xFFFF;
    }
  }
  return buf.buffer;
}

/**
 * Processes microphone data into a data stream
 *
 * @param {object} e Input from the microphone
 */
function microphoneProcess(e) {
  const left = e.inputBuffer.getChannelData(0);
  const left16 = convertFloat32ToInt16(left);
  socket.emit('binaryAudioData', left16);
}

/**
 * Stops recording and closes everything down. Runs on error or on stop.
 */
function closeAll() {
  // Clear the listeners (prevents issue if opening and closing repeatedly)
  socket.off('speechData');
  socket.off('googleCloudStreamError');
  const tracks = globalStream ? globalStream.getTracks() : null;
  const track = tracks ? tracks[0] : null;
  if (track) {
    track.stop();
  }

  if (processor) {
    if (input) {
      try {
        input.disconnect(processor);
      } catch (error) {
        console.warn('Attempt to disconnect input failed.');
      }
    }
    processor.disconnect(context.destination);
  }
  if (context) {
    context.close().then(() => {
      input = null;
      processor = null;
      context = null;
      AudioContext = null;
    });
  }
}

// audioStream constraints
const constraints = {
  audio: true,
  video: false
};

const AudioStreamer = {
  /**
     * @param {function} onData Callback to run on data each time it's received
     * @param {function} onError Callback to run on an error if one is emitted.
     */
  initRecording(onData, onError) {
    socket.emit('startGoogleCloudStream', {
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'pt-BR',
        profanityFilter: false,
        enableWordTimeOffsets: true
      },
      interimResults: true // If you want interim results, set this to true
    }); // init socket Google Speech Connection
    AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    processor = context.createScriptProcessor(bufferSize, 1, 1);
    processor.connect(context.destination);
    context.resume();

    const handleSuccess = function (stream) {
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
    if (onData) {
      socket.on('speechData', (data) => {
        onData(data);
      });
    }

    socket.on('googleCloudStreamError', (error) => {
      if (onError) {
        onError('error', error);
      }
      // We don't want to emit another end stream event
      closeAll();
    });
  },

  stopRecording() {
    socket.emit('endGoogleCloudStream', '');
    closeAll();
  }
};

export default AudioStreamer;
