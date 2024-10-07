/* eslint-disable prettier/prettier */
// customers/customer.model.ts
import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from '../products/product.model';

@Table
export class Customer extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @ForeignKey(() => Product)
  @Column
  product_id: number;


  @BelongsTo(() => Product, { onDelete: 'CASCADE' }) // Додаємо каскадне видалення
  product: Product; 
}
