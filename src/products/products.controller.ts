/* eslint-disable prettier/prettier */
// products/products.controller.ts
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id') 
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productsService.updateProduct(id, updateProductDto);
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  @Delete(':id') 
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.productsService.deleteProduct(id);
  }
}
