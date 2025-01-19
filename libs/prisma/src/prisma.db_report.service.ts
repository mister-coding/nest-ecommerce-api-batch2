
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db_prisma/db_report';

@Injectable()
export class PrismaDBReportService extends PrismaClient implements OnModuleInit {
 
  async onModuleInit() {
    console.log("Start Connect DB Report");
    await this.$connect();
  }
  
}
