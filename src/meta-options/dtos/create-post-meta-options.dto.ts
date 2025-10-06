import { IsNotEmptyObject, IsObject } from 'class-validator';
export class CreatePostMetaOptionsDto {
  @IsNotEmptyObject()
  @IsObject()
  metaValue: Record<string, any>;
}
