import { Controller, Param, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { GlobalPartnerDTO, UpdateGlobalPartnerDTO } from "./dto";
import { GlobalPartner } from "./global-partner.model";
import { GlobalPartnerService } from "./global-partner.service";
import { MulterIntercepter } from "src/core/interceptors";
import { MulterEnum } from "src/core/interfaces";

@Controller('configurations/global-partner')
export class GlobalPartnerController extends GenericController<GlobalPartner,GlobalPartnerDTO,UpdateGlobalPartnerDTO>({createObjDTO:GlobalPartnerDTO,updateObjDTO:UpdateGlobalPartnerDTO}){

    constructor(private readonly globalPartnerService : GlobalPartnerService){super(globalPartnerService)}

    @Put('update-cover-image/:id')
    @UseInterceptors(
        MulterIntercepter({
            type: MulterEnum.single,
            fieldName:'coverImage',
            path:'/media/global-partner'
        })
    )
    UpdateCoverImages(
        @UploadedFile()file:Express.Multer.File,
        @Param('id') id :string,
    ){  
        return this.globalPartnerService.UpdateImages(file,id,'coverImage')
    }

    @Put('update-background-image/:id')
    @UseInterceptors(
        MulterIntercepter({
            type: MulterEnum.single,
            fieldName:'backgroundImage',
            path:'/media/global-partner'
        })
    )
    UpdateImages(
        @UploadedFile()file:Express.Multer.File,
        @Param('id') id :string,
    ){  
        return this.globalPartnerService.UpdateImages(file,id,'backgroundImage')
    }
}