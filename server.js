const https = require('https');
const http = require('http')
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

const PORT = 443;
const PORTLocal = 80;
http.createServer(app).listen(PORTLocal, () => {
    console.log(`HTTPS server running at https://127.0.0.1:${PORTLocal}`);
})
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS server running at https://127.0.0.1:${PORT}`);
});