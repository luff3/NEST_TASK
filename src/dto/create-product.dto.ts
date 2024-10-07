/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Product name should not be empty' })
  readonly name: string;

  @IsNumber()
  @Min(0, { message: 'Price must be a positive number' })
  readonly price: number;

  @IsNumber()
  @Min(0, { message: 'Stock must be at least 0' })
  readonly stock: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Supplier ID is required' })
  readonly supplier_id: number;
}
