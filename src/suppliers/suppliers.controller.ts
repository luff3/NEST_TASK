/* eslint-disable prettier/prettier */
// suppliers/suppliers.controller.ts
import { Controller, Get } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './supplier.model';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  async getAllSuppliers(): Promise<Supplier[]> {
    return this.suppliersService.findAll();
  }
}
