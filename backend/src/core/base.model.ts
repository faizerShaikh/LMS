import {
  AfterBulkCreate,
  AfterCreate,
  AfterUpdate,
  BeforeSave,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { MetaDataType } from 'src/modules/configurations/MetaData/dto/type.enum';
import { MetaData } from 'src/modules/configurations/MetaData/meta.model';

export class MyBaseModel extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @BelongsTo(() => MetaData, {
    onUpdate: 'cascade',
    onDelete: 'cascade',
  })
  metaData: MetaData;

  @ForeignKey(() => MetaData)
  metaID: string;

  @Default(null)
  @Column({
    type: DataType.VIRTUAL,
  })
  type: MetaDataType;

  @Column({
    unique: true,
  })
  slug: string;

  @BeforeSave
  static async generateSlug(baseModel: MyBaseModel): Promise<void> {
    baseModel.slug = this.toSlugFormat(baseModel.slug);
  }

  private static toSlugFormat(str: string): string {
    if (str)
      return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .replace(/[^\w\s-]/g, '')
        .trim();
  }

  @AfterCreate
  static async createMetaData(baseModel: MyBaseModel): Promise<void> {
    try {
      const metaData = await MetaData.create({ type: baseModel.type });
      baseModel.metaID = metaData.id;
      baseModel.slug = this.toSlugFormat(baseModel.slug);
      await baseModel.save();
    } catch (error) {
      console.error('Error creating MetaData:', error);
      throw error;
    }
  }

  @AfterUpdate
  static async updateMetaData(baseModel: MyBaseModel): Promise<void> {
    try {
      baseModel.slug = this.toSlugFormat(baseModel.slug);
      await MetaData.update(
        { type: baseModel.type },
        { where: { id: baseModel.metaID } },
      );
    } catch (error) {
      console.error('Error creating MetaData:', error);
      throw error;
    }
  }

  private static async createOrUpdateMetaData(
    baseModel: MyBaseModel,
  ): Promise<void> {
    try {
      const metaData = await MetaData.findOne({
        where: { id: baseModel.metaID },
      });

      if (!metaData) {
        await MetaData.create({ type: baseModel.type }).then(
          (createdMetaData) => {
            baseModel.metaID = createdMetaData.id;
            return baseModel.save();
          },
        );
      } else {
        await MetaData.update(
          { type: baseModel.type },
          { where: { id: baseModel.metaID } },
        );
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
        baseModel.slug = this.toSlugFormat(baseModel.slug);
        await this.createOrUpdateMetaData(baseModel);
      }
    } catch (error) {
      console.error('Error creating MetaData in bulk:', error);
      throw error;
    }
  }
}
