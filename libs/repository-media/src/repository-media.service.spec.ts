import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryMediaService } from './repository-media.service';

describe('RepositoryMediaService', () => {
  let service: RepositoryMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryMediaService],
    }).compile();

    service = module.get<RepositoryMediaService>(RepositoryMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
