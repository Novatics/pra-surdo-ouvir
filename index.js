const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Pra surdo ouvir listening on ${port}`);
