import {
  IsArray,
  IsDateString,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostTypeEnum } from '../enums/post-type.enum';
import { PostStatusEnum } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: "What's new with NestJS?",
    minLength: 4,
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(255)
  title: string;

  @ApiProperty({
    description: 'The type of the post. Can be post, page, story, or series.',
    example: 'post',
    enum: PostTypeEnum,
  })
  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  postType: PostTypeEnum;

  @ApiProperty({
    description: 'The slug of the post',
    example: 'new-with-nestjs',
    minLength: 3,
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and use only "-" and without spaces. For example "my-url',
  })
  slug: string;

  @ApiProperty({
    description:
      'The status of the post. Can be draft, scheduled, review, or published.',
    example: 'draft',
    enum: PostStatusEnum,
  })
  @IsEnum(PostStatusEnum)
  @IsNotEmpty()
  status: PostStatusEnum;

  @ApiPropertyOptional({
    description: 'The content of the post',
    example: "This is the test post's content",
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(255)
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example: '{"@context": "https://schema.org", "@type": "Person"}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The featured image URL of the post',
    example: 'http://localhost.com/images/image1.jpg',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date on which the blog post was published',
    example: '2025-10-03T11:45:36.124Z',
  })
  @IsDateString()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'The tags of the post',
    example: ['nestjs', 'typescript'],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(255, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    description: 'The meta options of the post',
    example: [
      {
        key: 'testKey',
        value: 20,
      },
    ],
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifier for your meta option',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'any',
          description:
            'The value can be any value you want to store for your meta option',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[];
}
