import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(96)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
    message:
      'Minimum 8 characters password, it must contain at least one letter, one number and one special character',
  })
  password: string;
}
