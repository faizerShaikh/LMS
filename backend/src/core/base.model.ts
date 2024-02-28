import {
  AfterCreate,
  AfterUpdate,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { type } from 'src/modules/configurations/metaData/dto/type.enum';
import { MetaData } from 'src/modules/configurations/metaData/meta.model';

export class MyBaseModel extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @BelongsTo(() => MetaData,{
    onUpdate:'cascade',
    onDelete:'cascade'
  })
  metaData: MetaData;

  @ForeignKey(() => MetaData)
  metaID: string;

  @Default(null)
  @Column({
    type: DataType.VIRTUAL,
  })
  type: type;

  @AfterCreate
  static async createMetaData(baseModel: MyBaseModel): Promise<void> {
    try {
      const metaData = await MetaData.create({ type: baseModel.type });
      baseModel.metaID = metaData.id;
      await baseModel.save();
    } catch (error) {
      console.error('Error creating MetaData:', error);
      throw error;
    }
  }

  @AfterUpdate
  static async updateMetaData(baseModel: MyBaseModel): Promise<void> {
    try {
      await MetaData.update({ type: baseModel.type },{where:{id:baseModel.metaID}});
    } catch (error) {
      console.error('Error creating MetaData:', error);
      throw error;
    }
  }

}
