import { ProductModule } from './modules/product.module';
import { ProductController } from './modules/product.controller';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './modules/product.service';

@Module({
  imports: [ProductModule],
  controllers: [ProductController, AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
