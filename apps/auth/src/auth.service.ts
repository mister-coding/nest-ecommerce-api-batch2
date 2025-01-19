import { PrismaDBMediaService } from '@app/prisma/prisma.db_media.service';
import { PrismaDBProductService } from '@app/prisma/prisma.db_product.service';
import { PrismaDBUserService } from '@app/prisma/prisma.db_user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
    // private dbUser: PrismaDBUserService,
    private dbProduct: PrismaDBProductService,
    private dbMedia: PrismaDBMediaService
  ) { }

  getHello(): string {
    return 'Hello World Auth!';
  }

  async testGetUser() {
    // return await this.dbUser.user.findMany();
  }

  async testGetProduct() {
    return await this.dbProduct.product.findMany();
  }

  async testCreateMedia() {
    return await this.dbMedia.media.create({
      data: {
        name: "Test",
        path: "Test"
      }
    });
  }

}
