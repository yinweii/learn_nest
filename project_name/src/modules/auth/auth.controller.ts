import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpMessage } from 'src/global/global_enum';
import { ResponseData } from 'src/global/response_data';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: CreateUserDto) {
    const result = await this.authService.signIn(signInDto);
    return new ResponseData(200, true, HttpMessage.SUCCESS, result);
  }
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() request) {
    return new ResponseData(200, true, HttpMessage.SUCCESS, request.user);
  }
}
