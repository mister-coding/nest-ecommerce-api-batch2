
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db_prisma/db_media';

@Injectable()
export class PrismaDBMediaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log("Start Connect DB Media");
    await this.$connect();
  }
}
