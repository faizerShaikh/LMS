import { DATE} from "sequelize";
import { Column, DataType, PrimaryKey, Table,Model, IsUUID, Default,ForeignKey,BelongsTo, HasOne } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";
import { MetaData } from "../Meta Data/meta.model";
@Table({
    tableName:'events',
    modelName: 'Events',
    paranoid:true
})
export class Events extends Model{
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id:string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Name can not be empty',
          },
          notEmpty: {
            msg: 'Name can not be empty',
          },
        },
    })
    name:string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Description can not be empty',
          },
          notEmpty: {
            msg: 'Description can not be empty',
          },
          len: {
            msg: 'Description length must be between 1 to 1000 characters',
            args: [1, 1000],
          },
        },})
    description:string

    @Column(DataType.STRING)
    eventImage:string

    @Column(DataType.DATE)
    startDayTime:Date

    @Column(DataType.DATE)
    endDayTime:Date

    @Column(DataType.BOOLEAN)
    isFeatured:boolean

    @ForeignKey(() => User)
    created_by_id: string;
  
    @BelongsTo(() => User)
    created_by: User;
    
    @HasOne(()=>MetaData)
    metaData: MetaData
  
}