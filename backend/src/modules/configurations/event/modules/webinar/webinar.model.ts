import {
  AfterDestroy,
  Column,
  DataType,
  Default,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Events } from '../../event.model';
import { ConsoleLogger } from '@nestjs/common';

@Table({
  tableName: 'webinars',
  paranoid: true,
})
export class Webinar extends Model {

  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column({
    type: DataType.TEXT,
    get() {
      const value = this.getDataValue('speakers');
      return value ? JSON.parse(value) : null;
    },
    set(value: any) {
      this.setDataValue('speakers', JSON.stringify(value));
    },
  })
  speakers: { name: string; bio: string; image: string; linkdIn: string }[];

  @Column({
    type: DataType.TEXT,
  })
  agenda: string;

  @HasOne(() => Events, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  event: Events;

  @AfterDestroy
  static async deleteWebinar(instance: Webinar) {
    console.log('AfterDestroy hook triggered for Webinar with ID:', instance.id);
    
    const event = await instance.$get('event');
    if (event) {
      console.log('Associated event found:', event.id);
      await event.update({ deletedAt: new Date() });
      console.log('upadted successfully')
    } else {
      console.log('No associated event found for Webinar with ID:', instance.id);
    }
  }
}
