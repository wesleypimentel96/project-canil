import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import MainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'viwes'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// Server routes
server.use(MainRoutes);

server.listen(process.env.PORT);