import { Controller, Param, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Press } from './press.model';
import { PressDTO, UpdatePressDTO } from './dto';
import { PressService } from './press.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configurations/press-release')
export class PressController extends GenericController<
  Press,
  PressDTO,
  UpdatePressDTO
>({
  createObjDTO: PressDTO,
  updateObjDTO: UpdatePressDTO,
}) {
  constructor(private readonly pressService: PressService) {
    super(pressService);
  }
  @Put('update-press-image/:id')
  @UseInterceptors(
    MulterIntercepter({
        type:MulterEnum.single,
        fieldName:'coverImage',
        path:'/media/pressRelease'
    })
  )
  async updateCoverImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ){
    return this.pressService.updateCoverIamge(file,id)
  }


}
