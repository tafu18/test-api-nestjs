import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, Validate } from 'class-validator';
import { CompaniesService } from 'src/company/companies.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsCompanyExistValidator implements ValidatorConstraintInterface {
  constructor(private readonly companyService: CompaniesService) {} // CompanyService'i enjekte ettik

  async validate(companyId: number, args: ValidationArguments) {
    const company = await this.companyService.findOne(companyId); // companyService ile doğrulama yapıyoruz
    return !!company; // Eğer şirket varsa true, yoksa false döner
  }

  defaultMessage(args: ValidationArguments) {
    return `The company with ID ${args.value} does not exist.`; // Geçerli değilse mesaj döndürür
  }
}
