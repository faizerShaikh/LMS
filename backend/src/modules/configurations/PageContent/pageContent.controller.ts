import { Controller, Param,Get, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { PageContent } from "./pageContent.model";
import { CreatePageDto, UpdatePageContent } from "./dtos";
import { PageContentService } from "./pageContent.service";
import { MulterIntercepter } from "src/core/interceptors";
import { MulterEnum } from "src/core/interfaces";

@Controller('configurations/page-content')
export class PageContentController extends GenericController<PageContent,CreatePageDto,UpdatePageContent>({
    createObjDTO:CreatePageDto,
    updateObjDTO:UpdatePageContent,
    notAllowedMethods:[0,4]
}){
    constructor(private readonly PageContentService: PageContentService){
        super(PageContentService);
    }
    
  @Put('update-page-image/:id')
  @UseInterceptors(
    MulterIntercepter({
        type:MulterEnum.single,
        fieldName:'coverImage',
        path:'/media/pageContent'

    })
  )
  async updatePageImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.PageContentService.updatePageImage(file, id);
  }

  @Get(':slug')
  async findOneByName(@Param('slug') slug: string) {
    return this.PageContentService.findOneByName(slug);
  }
}