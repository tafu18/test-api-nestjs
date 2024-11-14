import { IsString, IsEmail, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { CompanyScale } from 'src/enum/companyScale';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  phone_number: string;

  @IsEnum(CompanyScale)
  @IsOptional()
  company_scale?: CompanyScale;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
