import { Module } from '@nestjs/common';
import { RepositoryProductService } from './repository-product.service';

@Module({
  providers: [RepositoryProductService],
  exports: [RepositoryProductService],
})
export class RepositoryProductModule {}
