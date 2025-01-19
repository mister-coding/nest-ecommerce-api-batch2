import { Injectable } from "@nestjs/common";
import { PrismaDBMediaService } from '@app/prisma/prisma.db_media.service'
import { media, Prisma } from '@db_prisma/db_media';

@Injectable()
export class MediaRepository {
    constructor(private dbMedia: PrismaDBMediaService) { }

    get table(): Prisma.mediaDelegate {
        return this.dbMedia.media
    }

    async create(data: media) {
        return await this.table.create({
            data: data
        })
    }

    async update(id: string, data: media) {
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