import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepositoty: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();
    user.first_name = createUserDto.first_name;
    user.last_name = createUserDto.last_name;
    user.age = createUserDto.age;
    return this.userRepositoty.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepositoty.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
