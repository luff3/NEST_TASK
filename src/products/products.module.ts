/* eslint-disable prettier/prettier */
// products/products.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { SuppliersModule } from 'src/suppliers/suppliers.module';

@Module({
  imports: [SequelizeModule.forFeature([Product]),
  SuppliersModule
],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
