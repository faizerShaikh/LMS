import {
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Events } from '../../event.model';

@Table({
  paranoid: true,
  tableName: 'event-registrations',
})
export class EventRegistration extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  mobileNumber: string;

  @Column
  experience: string;

  @Column
  degree: string;

  @ForeignKey(() => Events)
  @Column
  eventId: string;
}
