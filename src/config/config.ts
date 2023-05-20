import * as dotenv from 'dotenv';

export abstract class ConfigServer {
	constructor() {
		const nodeEnv = this.createPathEnv(this.nodeEnv);
		dotenv.config({ path: nodeEnv });
	}

	getEnvVariable(key: string) {
		return process.env[key];
	}
	getNumberEnvVariable(key: string) {
		return Number(this.getEnvVariable(key));
	}

	get nodeEnv() {
		return this.getEnvVariable('NODE_ENV')?.trim() || '';
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
