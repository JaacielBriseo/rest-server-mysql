import { BaseEntity } from '../config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	@Column('text')
	username!: string;

	@Column('text')
	name!: string;

	@Column('text')
	lastName!: string;

	@Column({ nullable: true, type: 'text' })
	jobPosition?: string;

	@Column('text')
	phoneNumber!: string;
}
