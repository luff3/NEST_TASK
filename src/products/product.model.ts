/* eslint-disable prettier/prettier */
// products/product.model.ts
import { Column, Model, Table, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Supplier } from '../suppliers/supplier.model';


@Table({ tableName: 'products', underscored: true, timestamps: false }) // Вимкнути автоматичні поля
export class Product extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    product_id: number; // Змінити назву на 'product_id'

  @Column
  name: string;

  @Column
  price: number;

  @Column
  stock: number;

  @ForeignKey(() => Supplier)
  @Column
  supplier_id: number;

  @BelongsTo(() => Supplier, { onDelete: 'CASCADE' }) // Каскадне видалення
  supplier: Supplier;

}
