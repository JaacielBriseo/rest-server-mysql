import { BaseEntity } from '../config/base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserEntity } from '../user';
import { PurchaseEntity } from '../purchase/purchase.entity';

@Entity({ name: 'customer' })
export class CustomerEntity extends BaseEntity {
	@Column('text')
	address!: string;

	@Column('text')
	dni!: number;

	@OneToOne(() => UserEntity, user => user.customer)
	@JoinColumn({ name: 'user_id' })
	user!: UserEntity;

  @OneToMany(()=> PurchaseEntity,(purchase)=> purchase.customer)
  // @JoinColumn({name:'purchase_id'})
  purchases!: PurchaseEntity[]
}
