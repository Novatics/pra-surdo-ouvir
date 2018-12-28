const os = require('os');
const express = require('express');
const server = require('./server/api/server');

const options = {
  endpoint: '/graphql',
  playground: '/playground',
};

server.express.use(express.static('dist'));
server.express.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
server.start(options, () => console.log('🚀  Server is running on http://localhost:4000/playground'));
