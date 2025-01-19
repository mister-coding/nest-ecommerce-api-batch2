import { Module } from '@nestjs/common';
import { RepositoryReportService } from './repository-report.service';
import { ReportOrderRepository } from './classes/report-order.repository';

const repos = [
  ReportOrderRepository
]

@Module({
  providers: [RepositoryReportService,...repos],
  exports: [RepositoryReportService,...repos],
})
export class RepositoryReportModule {}
