import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../config/base.service';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

export class UserService extends BaseService<UserEntity> {
	constructor() {
		super(UserEntity);
	}

	async findAll(): Promise<UserEntity[]> {
		return (await this.execRepository).find();
	}

	async findById(id: string): Promise<UserEntity | null> {
		return (await this.execRepository).findOneBy({ id });
	}

	async createUser(body: UserDTO): Promise<UserEntity> {
		return (await this.execRepository).save(body);
	}

	async updateUser(id: string, infoUpdate: Partial<UserDTO>): Promise<UpdateResult> {
		return (await this.execRepository).update(id, infoUpdate);
	}

	async deleteUser(id: string): Promise<DeleteResult> {
		return (await this.execRepository).delete({ id });
	}
}
