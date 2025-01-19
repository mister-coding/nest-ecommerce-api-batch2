import { Injectable } from "@nestjs/common";
import { PrismaDBUserService } from '@app/prisma/prisma.db_user.service'
import { user, Prisma } from '@db_prisma/db_user';

@Injectable()
export class UserRepository {
    constructor(private dbUser: PrismaDBUserService) { }

    get table(): Prisma.userDelegate {
        return this.dbUser.user
    }

    async create(data: user) {
        return await this.table.create({
            data: data
        })
    }

    async update(id: string, data: user) {
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