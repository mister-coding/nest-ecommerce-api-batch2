import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryReportService } from './repository-report.service';

describe('RepositoryReportService', () => {
  let service: RepositoryReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryReportService],
    }).compile();

    service = module.get<RepositoryReportService>(RepositoryReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
