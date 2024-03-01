import { Controller, Param, Put,Post,Body, UploadedFile, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { gallery } from "./gallery.model";
import { GalleryDto, UpdateGalleryDTO } from "./dto";
import { GalleryService } from "./gallery.service";
import { MulterIntercepter } from "src/core/interceptors";
import { MulterEnum } from "src/core/interfaces";

@Controller('configurations/gallery')
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
            path:'/media/gallery/'
        })
    )
    async updateGalleryImage(
        @Param('id') id:string,
        @UploadedFile() file:Express.Multer.File
    ){
        return this.GalleryService.UpdateGalleryImage(file,id)
    }

@Put('bulk-create')
@UseInterceptors(
    MulterIntercepter({
    type: MulterEnum.any,
    path: '/media/gallery/'
}))
async createBulk(@Body() data: any[], @UploadedFiles() files: Express.Multer.File,@Param() id) {
    try {
        const result = await this.GalleryService.createBulk(data, files,id);
        if (result.success) {
            return { success: true, message: 'Bulk insert successful', data: result.data };
        } else {
            return { success: false, message: 'Bulk insert failed', error: result.error };
        }
    } catch (error) {
        return { success: false, message: 'Internal server error', error: error.message };
    }
}
    @Put('bulk-update')
    async bulkUpdate(@Body() data: any[]) {
    const result = await this.GalleryService.updateBulk(data);
    }
}