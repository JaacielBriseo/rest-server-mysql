import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export abstract class ConfigServer {
	constructor() {
		const nodeEnv = this.createPathEnv(this.nodeEnv);
		dotenv.config({ path: nodeEnv });
	}

	get nodeEnv() {
		return this.getEnvVariable('NODE_ENV')?.trim() || '';
	}

	get typeORMConfig(): DataSourceOptions {
		return {
			type: 'mysql',
			host: this.getEnvVariable('DB_HOST'),
			port: this.getNumberEnvVariable('DB_PORT'),
			username: this.getEnvVariable('DB_USER'),
			password: this.getEnvVariable('DB_PASSWORD'),
			database: this.getEnvVariable('DB_DATABASE'),
			entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
			synchronize: true,
			logging: false,
			namingStrategy: new SnakeNamingStrategy(),
		};
	}

	getEnvVariable(key: string) {
		return process.env[key];
	}
	getNumberEnvVariable(key: string) {
		return Number(this.getEnvVariable(key));
	}

	createPathEnv(path: string) {
		const arrEnv = ['env'];

		if (path.length > 0) {
			const strToArr = path.split('.');
			arrEnv.unshift(...strToArr);
		}
		return '.' + arrEnv.join('.');
	}
}
