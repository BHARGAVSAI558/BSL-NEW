const express = require('express');
	const cors = require('cors');
	const dotenv = require('dotenv');
	const connectDB = require('./config/db');
	const userRoutes = require('./routes/userRoutes');

	dotenv.config();
	connectDB();

	const app = express();

	// Middleware
	app.use(cors());
	app.use(express.json());

	// API routes
	app.use('/api/users', userRoutes);

	const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => {
  	console.log(`Server running on port ${PORT}`);
	});
