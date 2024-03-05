import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { FaqTopic } from "./faqTopic.model";

@Injectable()
export class faqTopicService extends GenericService({}){
    constructor(
        @InjectModel(FaqTopic) private faqTopic:typeof FaqTopic,
        private reqParams:RequestParamsService

    ){
        super(faqTopic,reqParams)
    }

    async bulkCreate(data: any): Promise<any[]> {
        const faqData = data.faq;
        console.log('faq data====================>', faqData);
        const faqIds = faqData.map(item => item.faqId);
        await this.faqTopic.destroy({where:{faqId:faqIds}})
    
        const createdRecords = [];
        for (const item of faqData) {
            const { id, ...rest } = item;
            createdRecords.push(rest);
        }
    
        console.log('bulk create data:', createdRecords);
        if (createdRecords.length > 0) {
            await this.faqTopic.bulkCreate(createdRecords);
            console.log('data======================>', createdRecords);
            return createdRecords;
        }
        return createdRecords;
    }
    
}
// {
//     faq: [
//       {
//         id: '06911411-f019-4392-9361-590b52fbf3f5',
//         topic: 'RiseBack',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-01T10:16:43.954Z',
//         updatedAt: '2024-03-01T10:16:43.954Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: 'f5dcf03e-4534-4fe8-a2c7-280a232459c8',
//         topic: 'Advantage - Indian Universities',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-01T09:51:53.786Z',
//         updatedAt: '2024-03-01T09:51:53.786Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: 'c3f7577f-5a93-423a-ac12-469881090847',
//         topic: 'Indian Universities',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-01T09:51:54.838Z',
//         updatedAt: '2024-03-01T09:51:54.838Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: '64227dd9-ce14-47b4-8eb3-3f6ffcae54ce',
//         topic: 'Online Universities degree program',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-01T09:51:55.757Z',
//         updatedAt: '2024-03-01T09:51:55.757Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: '54e7a742-a020-4876-9039-115e6a6f248e',
//         topic: 'Types of degree programs',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-01T09:51:56.538Z',
//         updatedAt: '2024-03-01T09:51:56.538Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: '43d39d9a-75d9-4e44-aab5-656ed0180399',
//         topic: 'Advantage - Indian Universities',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-05T09:28:32.478Z',
//         updatedAt: '2024-03-05T09:28:32.478Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: '0aea05a2-2f73-4f96-a85f-652cb68f8ffb',
//         topic: 'Advantage - Indian Universities',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-05T09:28:32.478Z',
//         updatedAt: '2024-03-05T09:28:32.478Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       {
//         id: '852c20af-3507-497a-b694-4e0292da00ad',
//         topic: 'Advantage - Indian Universities',
//         answer: 'RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their',
//         createdAt: '2024-03-05T09:28:32.478Z',
//         updatedAt: '2024-03-05T09:28:32.478Z',
//         deletedAt: null,
//         faqId: '396fcd31-fa6a-44fc-bd73-7acfd786fd25'
//       },
//       { topic: 'test', answer: 'test' }
//     ]
//   }
//   []