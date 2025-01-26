import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaDBUserService } from './prisma.db_user.service';
import { PrismaDBProductService } from './prisma.db_product.service';
import { PrismaDBMediaService } from './prisma.db_media.service';
import { PrismaDBReportService } from './prisma.db_report.service';

@Module({
  providers: [
    // PrismaService,
    PrismaDBUserService,
    // PrismaDBProductService,
    // PrismaDBMediaService,
    // PrismaDBReportService
  ],
  exports: [
    // PrismaService,
    PrismaDBUserService,
    // PrismaDBProductService,
    // PrismaDBMediaService,
    // PrismaDBReportService
  ],
})
export class PrismaUserModule {}
