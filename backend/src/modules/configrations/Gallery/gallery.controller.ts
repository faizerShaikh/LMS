import { Controller, Param, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { gallery } from "./gallery.model";
import { GalleryDto, UpdateGalleryDTO } from "./dto";
import { GalleryService } from "./gallery.service";
import { MulterIntercepter } from "src/core/interceptors";
import { MulterEnum } from "src/core/interfaces";

@Controller('configrations/gallery')
export class GalleryController extends GenericController<gallery,GalleryDto,UpdateGalleryDTO>({
    createObjDTO:GalleryDto,
    updateObjDTO:UpdateGalleryDTO
}){
    constructor(private readonly GalleryService: GalleryService){
        super(GalleryService)
    }
    @Put('update-gallery-image/:id')
    @UseInterceptors(
        MulterIntercepter({
            type:MulterEnum.single,
            fieldName:'coverImage',
            path:'/media/gallery'
        })
    )
    async updateGalleryImage(
        @Param('id') id:string,
        @UploadedFile() file:Express.Multer.File
    ){
        return this.GalleryService.UpdateGalleryImage(file,id)
    }
}