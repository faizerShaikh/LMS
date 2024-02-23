import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PageContent } from "./pageContent.model";
import { GenericService, RequestParamsService } from "src/core/modules";
import { CreatePageDto, UpdatePageContent } from "./dtos";
import { unlink } from "fs";
import { join } from "path";
import { gallery } from "../Gallery/gallery.model";

@Injectable()
export class PageContentService extends GenericService<PageContent,CreatePageDto,UpdatePageContent>({
    includes:[gallery]
}){
    constructor(
        @InjectModel(PageContent) private pageContent: typeof PageContent,
        private reqParams: RequestParamsService
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
}