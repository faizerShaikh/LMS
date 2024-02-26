import { PartialType } from "@nestjs/mapped-types";
import { GalleryDto } from "./create-gallery.dto";

export class UpdateGalleryDTO extends PartialType(GalleryDto){
    
}