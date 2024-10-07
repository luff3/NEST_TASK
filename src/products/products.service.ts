/* eslint-disable prettier/prettier */
// products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from '../dto/create-product.dto';
import { Supplier } from 'src/suppliers/supplier.model';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product,
        @InjectModel(Supplier)
        private supplierModel: typeof Supplier,
      ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.findAll();
    return products;
  }


  async findById(id: number): Promise<Product> {
    const product = await this.productModel.findOne({
      where: { product_id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }


  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { supplier_id } = createProductDto;

    const supplier = await this.supplierModel.findByPk(supplier_id);
    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${supplier_id} not found`);
    }

    return this.productModel.create({ ...createProductDto });
  }


  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const { supplier_id } = updateProductDto;

    const supplier = await this.supplierModel.findByPk(supplier_id);
    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${supplier_id} not found`);
    }

    const [updatedRowsCount, [updatedProduct]] = await this.productModel.update(updateProductDto, {
      where: { product_id: id }, 
      returning: true, 
    });

    if (updatedRowsCount === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    await product.destroy(); // Видалення продукту
  }
}
