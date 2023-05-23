import { BaseEntity } from '../config/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { PurchasesProductEntity } from '../purchasesProduct/purchases-product.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
	@Column('text')
	productName!: string;

	@Column('text')
	description!: string;

	@Column('float')
	price!: number;

	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'category_id' })
	category!: CategoryEntity;

	@OneToMany(()=> PurchasesProductEntity,(purchaseProduct)=> purchaseProduct.product)
	purchaseProducts!: PurchasesProductEntity[]
}
