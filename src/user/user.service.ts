import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, userData: UpdateUserDto): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['company'],  // company ilişkisini de ekliyoruz
    });

    if (!user) {
      return null;
    }

    // Eğer companyId varsa, company'yi bul ve ilişkilendir
    if (userData.companyId) {
      const company = await this.companyRepository.findOne({
        where: { id: userData.companyId }
      });
      
      if (company) {
        user.company = company;  // Şirketi kullanıcıya atıyoruz
      }
    }

    // Diğer alanları güncelliyoruz
    Object.assign(user, userData);
    return this.usersRepository.save(user);
  }
  
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
