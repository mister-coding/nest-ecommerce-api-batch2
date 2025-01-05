
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db_prisma/db_product';

@Injectable()
export class PrismaDBProductService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
