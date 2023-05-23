import { BaseEntity } from '../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
	@Column('text')
	categoryName!: string;

	@OneToMany(() => ProductEntity, product => product.category)
	products!: ProductEntity[];
}
