import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { ProductModule } from '../product/product.module';
import { StoreModule } from '../store/store.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/escola-de-ti'), UsersModule, ProductModule, StoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
