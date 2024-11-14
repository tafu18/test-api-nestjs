import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne1(id: number): Promise<Company | null> {
    return this.companiesRepository.findOneBy({ id });
  }

  async findOne(id: number): Promise<Company | undefined> {
    return this.companiesRepository.findOneBy({id});
  }

  async create(companyData: Partial<Company>): Promise<Company> {
    const company = this.companiesRepository.create(companyData);
    return this.companiesRepository.save(company);
  }

  async update(
    id: number,
    companyData: Partial<Company>,
  ): Promise<Company | null> {
    const company = await this.companiesRepository.findOneBy({ id });

    if (!company) {
      return null;
    }

    Object.assign(company, companyData);
    return this.companiesRepository.save(company);
  }

  async remove(id: number): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}
