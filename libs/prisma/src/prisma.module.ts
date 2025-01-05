import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaDBUserService } from './prisma.db_user.service';
import { PrismaDBProductService } from './prisma.db_product.service';
import { PrismaDBMediaService } from './prisma.db_media.service';

@Module({
  providers: [
    PrismaService,
    PrismaDBUserService,
    PrismaDBProductService,
    PrismaDBMediaService
  ],
  exports: [
    PrismaService,
    PrismaDBUserService,
    PrismaDBProductService,
    PrismaDBMediaService
  ],
})
export class PrismaModule {}
