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
async newGallery(@Body() data: any[], @UploadedFiles() files: Express.Multer.File[],@Param() id) {
    const result = await this.GalleryService.createBulk(data, files);
}
    @Put('bulk-update')
    async bulkUpdate(@Body() data: any[]) {
    const result = await this.GalleryService.updateBulk(data);
    }
}

// async createBulk(data: any, files: Express.Multer.File[], ): Promise<any> {
//     try {
//         let dataToCreate = [];
//         let dataToUpdate = [];

//         for (const file of files) {
//             // Extract index from fieldname
//             const index = parseInt(file.fieldname.match(/\[(\d+)\]/)[1]);

//             const value = data.data[index];
//             console.log('=============================================>>>>>>>>>',value)
//             if (value) {
//                 if (value.id) {
//                     dataToUpdate.push({
//                         ...value,
//                         coverImage: 'media/gallery/' + file.filename
//                     });
//                 } else {
//                     //console.log('=============================================>>>>', file);
//                     dataToCreate.push({
//                         ...value,
//                         coverImage: 'media/gallery/' + file.filename
//                     });
//                 }
//             } else {
//                 console.error(`No data found for index ${index}`);
//             }
//         }

//         // Bulk create the updated data if there's any
//         if (dataToUpdate.length > 0) {
//             await this.Gallery.bulkCreate(dataToUpdate, { updateOnDuplicate: ["name", "description", "orderBy", "coverImage"] });
//         }

//         // Bulk create the new data if there's any
//         if (dataToCreate.length > 0) {
//             await this.Gallery.bulkCreate(dataToCreate);
//         }

//         return { success: true, dataToUpdate, dataToCreate };
//     } catch (error) {
//         console.error('Error in createBulk:', error);
//         return { success: false, error: error.message };
//     }
// }