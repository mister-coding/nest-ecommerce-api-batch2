import { Injectable } from "@nestjs/common";
import { PrismaDBProductService } from '@app/prisma/prisma.db_product.service'
import { payment, Prisma } from '@db_prisma/db_product';

@Injectable()
export class PaymentRepository {
    constructor(private dbProduct: PrismaDBProductService) { }

    get table(): Prisma.paymentDelegate {
        return this.dbProduct.payment
    }

    async create(data: payment) {
        return await this.table.create({
            data: data
        })
    }

    async update(id: string, data: payment) {
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