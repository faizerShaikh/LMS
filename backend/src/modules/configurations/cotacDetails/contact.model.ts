import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { GlobalPartner } from '../globalPartner/global-partner.model';
import { MetaDataType } from '../MetaData/dto/type.enum';
import { MyBaseModel } from 'src/core/base.model';

@Table({
  tableName: 'contacts',
})
export class Contacts extends MyBaseModel {
  override type = MetaDataType.CONTACTS;
  @Column
  address: string;

  @Column
  phone: string;

  @Column
  website: string;

  @Column
  email: string;

  @Column
  addressIcon: string;

  @Column
  phoneIcon: string;

  @Column
  websiteIcon: string;

  @Column
  emailIcon: string;

  @ForeignKey(() => GlobalPartner)
  globalPartnerID: string;

  @BelongsTo(() => GlobalPartner)
  globalPartner: GlobalPartner;
}
