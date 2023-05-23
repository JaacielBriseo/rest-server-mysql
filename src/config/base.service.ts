import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ConfigServer } from './config';

export class BaseService<T extends BaseEntity> extends ConfigServer {
	execRepository: Promise<Repository<T>>;

	constructor(private getEntity: EntityTarget<T>) {
		super();
		this.execRepository = this.initRepository(getEntity);
	}

	async initRepository<T extends ObjectLiteral>(entity: EntityTarget<T>) {
		const getConnection = await this.dbConnect();

		return getConnection.getRepository(entity);
	}
}
