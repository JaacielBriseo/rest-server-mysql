import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default class Server {
	private app: Application;
	private port: number;

	constructor() {
		this.app = express();
		this.port = 8000;
		this.middlewares();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(morgan('dev'));
		this.app.use(cors());
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server ready on port : ${this.port}`);
		});
	}
}
