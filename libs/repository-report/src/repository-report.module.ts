import { Module } from '@nestjs/common';
import { RepositoryReportService } from './repository-report.service';

@Module({
  providers: [RepositoryReportService],
  exports: [RepositoryReportService],
})
export class RepositoryReportModule {}
