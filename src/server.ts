import express, { Application, Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { UserRouter } from './user';

interface ServerApi {
	path: string;
	route: Router;
}

export default class Server extends ConfigServer {
	private app: Application;
	private port: number = this.getNumberEnvVariable('PORT');
	private apis: ServerApi[] = [
		{
			path: '/api/users',
			route: new UserRouter().router,
		},
	];

	constructor() {
		super();
		this.app = express();
		// this.dbConnect();
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
