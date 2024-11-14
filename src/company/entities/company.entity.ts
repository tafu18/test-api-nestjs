import { CompanyScale } from 'src/enum/companyScale';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column({
    type: 'enum',
    enum: CompanyScale,
    default: CompanyScale.SMALL,
  })
  company_scale: CompanyScale;

  @Column({ default: false })
  is_active: boolean;

  @OneToMany(() => User, (user) => user.company)
  users: User[];
}
