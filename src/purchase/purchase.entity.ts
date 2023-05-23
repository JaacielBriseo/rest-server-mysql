import { BaseEntity } from '../config/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';
import { PurchasesProductEntity } from '../purchasesProduct/purchases-product.entity';

@Entity({ name: 'purchase' })
export class PurchaseEntity extends BaseEntity {
	@Column('text')
	status!: string;

	@Column('text')
	paymentMethod!: string;

	@ManyToOne(() => CustomerEntity, customer => customer.purchases)
	@JoinColumn({ name: 'customer_id' })
	customer!: CustomerEntity;

	@OneToMany(() => PurchasesProductEntity, purchaseProduct => purchaseProduct.purchase)
	purchaseProducts!: PurchasesProductEntity[];
}
