/* eslint-disable prettier/prettier */
// customers/customers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.model';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customer) private customerModel: typeof Customer) {}

  findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }
}
 