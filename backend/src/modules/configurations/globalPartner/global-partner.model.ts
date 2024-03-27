import { Column, DataType, Default, HasOne, Table } from 'sequelize-typescript';
import { Contacts } from '../cotacDetails/contact.model';
import { MyBaseModel } from 'src/core/base.model';
import { MetaDataType } from '../MetaData/dto/type.enum';

@Table({
  tableName: 'global-partners',
  paranoid: true,
})
export class GlobalPartner extends MyBaseModel {
  override type = MetaDataType.GLOBAL_PARTNER;

  @Column
  name: string;

  @Default('media/default.png')
  @Column
  coverImage: string;

  @Column
  backgroundImage: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TEXT)
  vision: string;

  @Column(DataType.TEXT)
  objective: string;

  @Column
  popular_course: boolean;

  @HasOne(() => Contacts)
  contacts: Contacts;
}
