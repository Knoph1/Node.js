// Handle menu toggle on small screens
const toggle = document.querySelector('.menu-toggle');
const navList = document.getElementById('nav-list');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// Handle download button click
const downloadBtn = document.querySelector('.btn-download');

if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🎉 Node.js will be downloaded (demo functionality).\nPlease visit https://nodejs.org for the official version.');
    // Optional: trigger actual download if desired
    // window.location.href = 'server.mjs';
  });
}

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Node.js!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('✅ Server running at http://127.0.0.1:3000/');
});
