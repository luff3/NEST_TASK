/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly price?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly stock?: number;

  @IsOptional()
  @IsNumber()
  readonly supplier_id?: number;
}
