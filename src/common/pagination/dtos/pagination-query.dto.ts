import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQueryDto {
  @ApiPropertyOptional({
    description: 'The number of items per page',
    example: 10,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  limit: number = 10;

  @ApiPropertyOptional({
    description: 'The page number to return',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  page: number = 1;
}
