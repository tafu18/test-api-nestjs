import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    password: string; 

    @Column()
    address: string;
  
    @Column()
    email: string;
  
    @Column()
    phone_number: string;

    @Column({ default: false })
    is_active: boolean;

    @ManyToOne(() => Company, (company) => company.users, { nullable: true, onDelete: 'SET NULL' })
    company: Company;

}

