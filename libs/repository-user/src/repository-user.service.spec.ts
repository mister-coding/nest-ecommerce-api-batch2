import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryUserService } from './repository-user.service';

describe('RepositoryUserService', () => {
  let service: RepositoryUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryUserService],
    }).compile();

    service = module.get<RepositoryUserService>(RepositoryUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
