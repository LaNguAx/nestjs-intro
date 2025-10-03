import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post-dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The ID of the post to be updated.',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
