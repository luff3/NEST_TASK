/* eslint-disable prettier/prettier */
// suppliers/suppliers.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './supplier.model';

@Module({
  imports: [SequelizeModule.forFeature([Supplier])],
  controllers: [SuppliersController],
  providers: [SuppliersService],
  exports: [SequelizeModule], 
})
export class SuppliersModule {}
