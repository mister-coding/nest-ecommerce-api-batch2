
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db_prisma/db_user';

@Injectable()
export class PrismaDBUserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
