import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
  IsObject,
  IsInt,
  IsDate,
  IsEmpty,
  ValidateIf,
} from 'class-validator';
import { PostTypeEnum } from '../enums/post-type.enum';
import { PostStatusEnum } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
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
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example: { '@context': 'https://schema.org', '@type': 'Person' },
  })
  @IsOptional()
  @IsObject()
  schema?: Record<string, any>;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional()
  @IsDate({ message: 'publishOn must be an ISO8601 string' })
  @IsOptional()
  // optionally: @Type(() => Date) if you want auto Date conversion
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of Ids of tags',
    example: [1, 2],
  })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional({
    type: CreatePostMetaOptionsDto,
    description: 'The meta options of the post',
    example: {
      metaValue: {
        sidebarEnabled: true,
      },
    },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto;

  @ApiProperty({
    description:
      'The author ID of the post (deprecated — must not be sent anymore)',
    type: Number,
    example: 1,
    deprecated: true,
  })
  @ValidateIf((_, value) => value !== undefined)
  @IsEmpty({ message: 'authorId is deprecated and must not be provided.' })
  /** @deprecated This field is deprecated and must not be provided. */
  authorId?: number;
}
