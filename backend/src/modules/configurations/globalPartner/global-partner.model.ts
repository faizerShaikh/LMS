import { Column, DataType, Default, Table } from 'sequelize-typescript';
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

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TEXT)
  vision: string;

  @Column(DataType.TEXT)
  objective: string;

  @Column
  popular_course: string;

  @Column
  address: string;

  @Column
  phone: string;

  @Column
  website: string;

  @Column
  email: string;
}
