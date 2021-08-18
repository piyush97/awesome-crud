import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Orders } from './orders.entity';

@Injectable()
export class OrdersService extends TypeOrmCrudService<Orders> {
  constructor(@InjectRepository(Orders) repo) {
    super(repo);
  }
}
