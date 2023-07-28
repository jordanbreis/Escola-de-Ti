import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entities/store.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {

  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) { }


  create(createStoreDto: CreateStoreDto) {
    return this.storeModel.create(createStoreDto)
  }

  findAll() {
    return this.storeModel.find()
  }

  findOne(id: string) {
    return this.storeModel.findById(id)
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storeModel.findByIdAndUpdate(id, updateStoreDto)
  }

  remove(id: string) {
    return this.storeModel.findByIdAndDelete(id)
  }
}
