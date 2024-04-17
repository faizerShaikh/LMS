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
import { Events } from '../../event.model';

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
  speakers: { name: string; bio: string; image: string }[];

  @Column({
    type: DataType.TEXT,
  })
  agenda: string;

  @HasOne(() => Events,{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
   
  })
  event: Events;
}
