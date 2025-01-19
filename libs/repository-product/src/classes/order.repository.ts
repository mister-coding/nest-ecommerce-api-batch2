import { Injectable } from "@nestjs/common";
import { PrismaDBProductService } from '@app/prisma/prisma.db_product.service'
import { order, Prisma } from '@db_prisma/db_product';

@Injectable()
export class OrderRepository {
    constructor(private dbProduct: PrismaDBProductService) { }

    get table(): Prisma.orderDelegate {
        return this.dbProduct.order
    }

    async create(data: order) {
        return await this.table.create({
            data: data
        })
    }

    async update(id: string, data: order) {
        return await this.table.update({
            data: data,
            where: {
                id: id
            }
        })
    }

    async findOneByID(id: string) {
        return await this.table.findFirst({
            where: {
                id: id
            }
        })
    }

    async findAll() {
        return await this.table.findMany()
    }

    async remove(id: string) {
        return await this.table.delete({
            where: {
                id: id
            }
        })
    }

}