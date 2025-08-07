const http = require('http');

const PORT = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello ,jhkjvjkvhkj:) </h1>');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});