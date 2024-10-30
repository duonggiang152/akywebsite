const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

// SSL options
const sslOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

const PORT = 80;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS server running at https://127.0.0.1:${PORT}`);
});