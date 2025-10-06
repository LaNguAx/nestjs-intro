import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOption } from './meta-option.entity';

@Controller('meta-options')
@ApiTags('Meta Options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}
  @Post()
  public create(
    @Body() createMetaOptionDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOption> {
    return this.metaOptionsService.create(createMetaOptionDto);
  }
}
