import { Injectable } from "@nestjs/common";
import { PrismaDBProductService } from '@app/prisma/prisma.db_product.service'
import { Prisma, product } from '@db_prisma/db_product';

@Injectable()
export class ProductRepository {
    constructor(private dbProduct: PrismaDBProductService) { }

    get table():Prisma.productDelegate{
        return this.dbProduct.product
    }

    async create(product: product) {
        return await this.table.create({
            data: product
        })
    }

    async update(id: string, product: product) {
        return await this.table.update({
            data: product,
            where: {
                id: id
            }
        })
    }

    async findOneByID(id:string) {
        return await this.table.findFirst({
            where: {
                id: id,
                deleted_at: null
            }
        })
    }

    async findAll() {
        return await this.table.findMany({
            where:{
                deleted_at: null
            }
        })
    }

    async remove(id:string) {
        return await this.table.update({
            where: {
                id: id
            },
            data:{
                deleted_at: new Date()
            }
        })
    }

}