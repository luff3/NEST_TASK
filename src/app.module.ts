/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { Supplier } from './suppliers/supplier.model';
import { Product } from './products/product.model';
import { Customer } from './customers/customer.model'



@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '13022004',
      database: 'Shop', 
      models: [Supplier, Product, Customer],
      autoLoadModels: true, 
      synchronize: true,
      logging: true,
    }),
    SuppliersModule,
    ProductsModule,
    CustomersModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
