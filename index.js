const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const wav = require('wav');
const ss = require('socket.io-stream');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
  ss(socket).on('stream', (stream, meta) => {
    console.log('receiving');
    var fileWriter = new wav.FileWriter('demo.wav', {
      channels: 1,
      sampleRate: 48000,
      bitDepth: 16
    });
    stream.pipe(fileWriter);
    stream.on('end', function() {
      fileWriter.end();
    });
  })

  socket.on('close', function() {
    if (fileWriter != null) {
      fileWriter.end();
    }
  });
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});