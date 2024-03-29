import { Injectable } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Enquiry } from "./enquiry.model";
import { EnquiryDto, UpdateEnquiryDTO } from "./dto";
import { InjectModel } from "@nestjs/sequelize";
import * as XLSX from 'xlsx'
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import { dir } from "console";

@Injectable()
export class EnquiryService extends GenericService<Enquiry,EnquiryDto,UpdateEnquiryDTO>({}) {
    constructor(@InjectModel(Enquiry)private enquiry: typeof Enquiry, private reqParams: RequestParamsService){super(enquiry,reqParams)}

    async exportToExcel(data:any, filename:string):Promise<string>{
        try{
            if(!data||!Array.isArray(data.rows)||data.rows.length===0){
                throw new Error('Invalid data Format')
            }

            const enquiry:Enquiry[]=data.rows
            const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(enquiry.map(reg => reg.dataValues))
            const workbook: XLSX.WorkBook = {Sheets : {'data':worksheet},SheetNames:['data']}
            const excelBuffer: any = XLSX.write(workbook,{bookType:'xlsx',type:'buffer'})
            const directory = join(process.cwd(),'src','public','enquiries')

            if(!existsSync(directory)){
                mkdirSync(directory,{recursive: true})
            }

            const filePath = join( directory,`${filename}.xlsx`)
            require('fs').writeFileSync(filePath,excelBuffer)

            return filePath
        }catch(error){
            console.error(`Error exporting Excel File: ${error.message}`)
            throw error
        }
    }
}