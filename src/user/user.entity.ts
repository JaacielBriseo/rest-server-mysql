import { BaseEntity } from '../config/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	@Column('text')
	username!: string;

	@Column('text')
	name!: string;

	@Column('text')
	lastName!: string;

	@Column('text')
	city!: string;

	@Column('int')
	province!: number;

	@OneToOne(() => CustomerEntity, customer => customer.user)
	customer!: CustomerEntity;
}
