import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Order entity.
 *
 * @export
 * @class Orders
 */
@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  public orderId: number;

  @ApiProperty()
  @Column()
  public orderDate: Date;

  @ApiProperty()
  @Column()
  public requiredDate: Date;

  @ApiProperty()
  @Column()
  public shippedDate: Date;

  @ApiProperty()
  @Column()
  public status: string;

  @ApiProperty()
  @Column()
  public name: string;
}
