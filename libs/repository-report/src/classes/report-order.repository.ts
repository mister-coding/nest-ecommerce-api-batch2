import { Injectable } from "@nestjs/common";
import { PrismaDBReportService } from '@app/prisma/prisma.db_report.service'
import { report_order, Prisma } from '@db_prisma/db_report';

@Injectable()
export class ReportOrderRepository {
    constructor(private dbReport: PrismaDBReportService) { }

    get table(): Prisma.report_orderDelegate {
        return this.dbReport.report_order
    }

    async create(data: report_order) {
        return await this.table.create({
            data: data
        })
    }

    async update(id: string, data: report_order) {
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