
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db_prisma/db_product';

@Injectable()
export class PrismaDBProductService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
 
  async onModuleInit() {
    console.log("Start Connect DB Product");
    await this.$connect();
  }

  async onModuleDestroy() {
}
  
}