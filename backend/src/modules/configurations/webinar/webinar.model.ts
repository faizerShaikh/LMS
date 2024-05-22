import {
  Column,
  DataType,
  Default,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Events } from '../event/event.model';
import { MyBaseModel } from 'src/core/base.model';

@Table({
  tableName: 'webinars',
  paranoid: true,
})
export class Webinar extends MyBaseModel {
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
  speakers: { name: string; bio: string; image: string }[];

  @Column({
    type: DataType.TEXT,
  })
  agenda: string;

  @HasOne(() => Events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  event: Events;
}
