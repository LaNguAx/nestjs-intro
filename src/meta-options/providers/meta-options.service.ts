import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public create(
    createMetaOptionDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOption> {
    const metaOption = this.metaOptionsRepository.create(createMetaOptionDto);

    return this.metaOptionsRepository.save(metaOption);
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.metaOptionsRepository.delete(id);
  }
}
