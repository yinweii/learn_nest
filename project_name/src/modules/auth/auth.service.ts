import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { PostgresErrorCode } from 'src/global/global_enum';
import { User } from '../user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(userdata: CreateUserDto): Promise<any> {
    const user = await this.usersService.findByUserName(userdata.name);

    const isValidPassword = await bcrypt.compare(
      userdata.password,
      user.password,
    );
    console.log('User', isValidPassword);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }
    if (userdata.email !== user.email) {
      throw new UnauthorizedException('Invalid Email');
    }

    const payload = { sub: user.id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
  async register(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.usersService.findByUserName(createUserDto.name);
    if (user) {
      console.log('-----------------', user);
      throw new HttpException('User is Alreadly', HttpStatus.BAD_REQUEST);
    }

    try {
      const createdUser = await this.usersService.create({
        ...createUserDto,
        password: hashedPassword,
      });

      if (createdUser) {
        return await this.signIn(createdUser);
      }
      throw new HttpException('message', HttpStatus.BAD_REQUEST);
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
