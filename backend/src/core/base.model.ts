import {
  AfterBulkCreate,
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
  

  private static async createOrUpdateMetaData(baseModel: MyBaseModel): Promise<void> {
    try {
      const metaData = await MetaData.findOne({ where: { id: baseModel.metaID } });

      if (!metaData) {
        await MetaData.create({ type: baseModel.type }).then((createdMetaData) => {
          baseModel.metaID = createdMetaData.id;
          return baseModel.save();
        });
      } else {
        await MetaData.update({ type: baseModel.type }, { where: { id: baseModel.metaID } });
      }
    } catch (error) {
      console.error('Error creating/updating MetaData:', error);
      throw error;
    }
  }

  @AfterBulkCreate
  static async bulkCreateMetaData(baseModels: MyBaseModel[]): Promise<void> {
    try {
      for (const baseModel of baseModels) {
        await this.createOrUpdateMetaData(baseModel);
      }
    } catch (error) {
      console.error('Error creating MetaData in bulk:', error);
      throw error;
    }
  }

}
