/* eslint-disable prettier/prettier */
// customers/customers.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
}
