import Image from "next/image"


export interface BlogCardProps{
    BlogCardImg ?: string;
    BlogCardDate ?: string
    BlogCardHeading ?: string;
    BlogCardtext ?: string;
    variant: 'primary' | 'secondary'
}

export function BlogCard ({BlogCardImg ,BlogCardDate, BlogCardHeading, BlogCardtext, variant='primary'} : BlogCardProps){

    if(variant == 'primary'){
        return (
            <div className="w-[70%] shadow-2xl ">
            <Image
              height={400}
              width={500}
              alt="Test"
              src= {'http://localhost:5000/'+BlogCardImg}
              className="w-full"
            />
            <p className="font-bold py-4 px-4 text-xl">
              {BlogCardHeading}
            </p>
          </div>
        );
    }
    else if(variant='secondary'){
        return(
            <div className="w-[45%] shadow-2xl rounded-lg mb-10">
               <Image height={200} width={400} alt="Test" src={'http://localhost:5000/'+BlogCardImg} className="w-full mb-4 rounded-t-lg object-center" />
               <div className="px-4">
                   <p className="text-gray-400 mb-4">{BlogCardDate}</p>
                   <h2 className="mb-4 font-bold truncate-lines">{BlogCardHeading}</h2>
                   <p className="mb-8 truncate-lines">{BlogCardtext}</p>
               </div>
           </div>
        )
    }
}
   
