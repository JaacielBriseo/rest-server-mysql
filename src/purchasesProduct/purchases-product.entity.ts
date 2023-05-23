import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PurchaseEntity } from '../purchase/purchase.entity';
import { ProductEntity } from '../product/product.entity';
import { BaseEntity } from '../config/base.entity';

@Entity({ name: 'purchases_product' })
export class PurchasesProductEntity extends BaseEntity {
	@Column('int')
	quantityProduct!: number;

	@Column('float')
	totalPrice!: number;

	@ManyToOne(() => PurchaseEntity, purchase => purchase.purchaseProducts)
	@JoinColumn({ name: 'purchase_id' })
	purchase!: PurchaseEntity;

	@ManyToOne(() => ProductEntity, product => product.purchaseProducts)
	@JoinColumn({ name: 'product_id' })
	product!: ProductEntity;
}
