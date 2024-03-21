import {
  Column,
  DataType,
  Default,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { MyBaseModel } from 'src/core/base.model';
import { EventRegistration } from '../event/eventRegistration/eventRegistration.model';

@Table({
  tableName: 'webinars',
  paranoid: true,
})
export class Webinar extends MyBaseModel {
  @Column
  title: string;

  @Default('/media/default.png')
  @Column
  coverImage: string;

  // @Default(
  // {
  //     "name": "John Doe",
  //     "bio": "Software Engineer",
  //     "image": "/media/default.png"
  //     },
  // )

  // @Column({
  //     // defaultValue: JSON.stringify([{ name: "Default Speaker", bio: "Default Bio", image: "/default-speaker-image.png" }])
  //     type: DataType.TEXT,
  //     get() {
  //         const value = this.getDataValue('speakers');
  //         console.log('====================================================>values',value)
  //         return value ? JSON.parse(value) : null;
  //     },
  //     set(value: any) {
  //         this.setDataValue('speakers', JSON.stringify(value));
  //     }
  // })
  // speakers: { name: string; bio: string; image: string }[];

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  agenda: string;

  @HasMany(() => EventRegistration)
  registrations: EventRegistration[];
}
