import { createServer } from 'node:http';
import { parse } from 'node:url';

// Dummy data for demo
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const server = createServer((req, res) => {
  console.log(`📥 Received request: ${req.method} ${req.url}`);

  const url = parse(req.url, true);
  const { pathname } = url;

  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from Node.js!\n');
  }

  else if (pathname === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }

  else if (pathname === '/api/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const newUser = JSON.parse(body);
        newUser.id = users.length + 1;
        users.push(newUser);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('✅ RESTful API running at http://127.0.0.1:3000/');
});
