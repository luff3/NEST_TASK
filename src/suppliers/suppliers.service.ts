/* eslint-disable prettier/prettier */
// suppliers/suppliers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Supplier } from './supplier.model';

@Injectable()
export class SuppliersService {
  constructor(@InjectModel(Supplier) private supplierModel: typeof Supplier) {}

  findAll(): Promise<Supplier[]> {
    return this.supplierModel.findAll();
  }
}
