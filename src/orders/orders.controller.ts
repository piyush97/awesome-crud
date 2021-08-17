import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  async getOrders() {
    return 'ORDERS';
  }
}
