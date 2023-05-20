import express, { Application, Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';

interface ServerApi {
	path: string;
	route: Router;
}

export default class Server {
	private app: Application;
	private port: number;
	private apis: ServerApi[] = [
		{
			path: '/api/users',
			route: new UserRouter().router,
		},
	];

	constructor() {
		this.app = express();
		this.port = 8000;
		this.middlewares();
		this.routes();
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

	private routes() {
		this.apis.forEach(api => {
			this.app.use(api.path, api.route);
		});
	}
}
