import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PageContent } from "./pageContent.model";
import { GenericService, RequestParamsService } from "src/core/modules";
import { CreatePageDto, UpdatePageContent } from "./dtos";
import { unlink } from "fs";
import { join } from "path";
import { gallery } from "../Gallery/gallery.model";
import { MetaData } from "../Meta Data/meta.model";
import { MetaDataDto } from "../Meta Data/dto";
import { type } from "../Meta Data/dto/type.enum";

@Injectable()
export class PageContentService extends GenericService<PageContent,CreatePageDto,UpdatePageContent>({
    includes:[gallery], 
}){
    constructor(
        @InjectModel(PageContent) private pageContent: typeof PageContent,
        private reqParams: RequestParamsService,
        @InjectModel(MetaData)
        private metaData: typeof MetaData,
    ){
        super(pageContent,reqParams)
    }

    async updatePageImage(file:Express.Multer.File,id:string ){
        const page= await this.getOne<PageContent>(id)
        if(page.coverImage){
            unlink(join(__dirname,'../../../../','/src/public/'+page.coverImage),
            (err)=>{
                if(err){
                    throw new InternalServerErrorException(err)
                }
            console.log('file deleted...')
            },
        )
        }
        await page.update({
            coverImage:'/media/pageContent/'+file.filename
        })
        return 'Cover Image Uploaded Successfully'
    }


    async findOneByName(name: string): Promise<PageContent | null> {
        return PageContent.findOne({ where: { name } , include:[gallery]});
    }


    async create<PageContent>(dto: CreatePageDto): Promise<PageContent> {
        const pageContent= await super.create(dto)
        await this.createOtherObjects(dto,pageContent,true)
        return        
    }
    async update<PageContent>(data: UpdatePageContent, id: string): Promise<PageContent> {
        const pageContent= await super.update(data,id)
        await this.createOtherObjects(data,pageContent,false)
        return
    }

    async createOtherObjects(
        dto: CreatePageDto|UpdatePageContent,
        pageContent:PageContent,
        isNewRecord:boolean
    ){
        if(isNewRecord){
            await this.metaData.create({
                ...dto.metaData,
                pageID:pageContent.id,
                type:type.PAGE_CONTENT
            })
        }
        else{
            if(dto.metaData){
                await this.metaData.update<MetaData>(
                    {...dto.metaData},
                    {
                        where:{
                            pageID:pageContent.id
                        }
                    }
                )
            }
        }
    }
}