import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { RepositoryProductModule } from '@app/repository-product';

@Module({
  imports: [RepositoryProductModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
