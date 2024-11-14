import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  full_name?: string;  // Bu alanda güncelleme isteğe bağlı

  @IsString()
  address?: string;  // Bu alanda güncelleme isteğe bağlı

  @IsEmail()
  email?: string;  // Bu alanda güncelleme isteğe bağlı

  @IsString()
  phone_number?: string;  // Bu alanda güncelleme isteğe bağlı

  @IsBoolean()
  @IsOptional()  
  is_active?: boolean;  // Bu alanda güncelleme isteğe bağlı

  @IsOptional()  // Şirket opsiyonel olabilir
  companyId?: number;  // Bu alanda şirket ID'si
}