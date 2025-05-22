import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

console.log("Secret:", process.env.MY_SECRET);

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the response body "Hello, World"
  res.end(`<h1>Hello, World!</h1> ${MY_SECRET}`);
});

// Listen on port 80
const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
