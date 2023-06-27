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
    const newData = this.userRepositoty.create(createUserDto);
    return this.userRepositoty.save(newData);
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
