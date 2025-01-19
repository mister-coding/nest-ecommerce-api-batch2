import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryProductService } from './repository-product.service';

describe('RepositoryProductService', () => {
  let service: RepositoryProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryProductService],
    }).compile();

    service = module.get<RepositoryProductService>(RepositoryProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
