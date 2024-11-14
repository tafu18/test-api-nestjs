import { IsString, IsEmail, IsOptional, IsBoolean, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  full_name: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  phone_number: string;

  @IsBoolean()
  @IsOptional()  // Varsayılan olarak false olabilir
  is_active?: boolean;

  @IsOptional()  // Şirket opsiyonel olabilir
  companyId?: number;

  @IsString()
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string; // Şifre alanı eklendi
}