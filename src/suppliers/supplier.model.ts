/* eslint-disable prettier/prettier */
// suppliers/supplier.model.ts
import { Column, Model, Table, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Product } from '../products/product.model';

@Table({ tableName: 'suppliers', underscored: true, timestamps: false }) 
export class Supplier extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  supplier_id: number; 

  @Column
  name: string;

  @Column
  contact_info: string;

  @HasMany(() => Product)
  products: Product[];
}
