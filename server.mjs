// server.js
import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies

// Root route
app.get('/', (req, res) => {
  res.send('👋 Hello World from Express RESTful API');
});

// User routes
app.use('/api/users', userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
