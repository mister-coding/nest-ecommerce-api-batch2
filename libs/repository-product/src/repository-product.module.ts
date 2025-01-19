import { Module } from '@nestjs/common';
import { RepositoryProductService } from './repository-product.service';
import { PrismaModule } from '@app/prisma';
import { OrderRepository } from './classes/order.repository';
import { PaymentRepository } from './classes/payment.repository';
import { ProductRepository } from './classes/product.repository';
import { ShippingRepository } from './classes/shipping.repository';
import { StockRepository } from './classes/stock.repository';

const repos = [
  OrderRepository,
  PaymentRepository,
  ProductRepository,
  ShippingRepository,
  StockRepository
]

@Module({
  imports:[PrismaModule],
  providers: [RepositoryProductService,...repos],
  exports: [RepositoryProductService,...repos],
})
export class RepositoryProductModule {}