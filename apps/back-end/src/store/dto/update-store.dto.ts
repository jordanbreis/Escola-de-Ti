import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Product } from '../../product/entities/product.entity';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    name: string

    products: Product[]

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    address: string
}
