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
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepositoty.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepositoty.find();
  }

  async findByUserName(name: string) {
    return await this.userRepositoty.findOne({
      where: {
        name: name,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
