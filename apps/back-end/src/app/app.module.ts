import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jordan:teste123@cluster0.nrk6gm2.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
