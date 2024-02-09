import Image from "next/image"


export interface BlogCardProps{
    BlogCardImg : string;
    BlogCardDate : string
    BlogCardHeading : string;
    BlogCardtext : string
}
export function BlogCard ({BlogCardImg ,BlogCardDate, BlogCardHeading, BlogCardtext} : BlogCardProps){
    
return(
    <div className="w-[45%] shadow-2xl rounded-lg mb-10">
       <Image height={200} width={400} alt="Test" src={'http://localhost:5000/'+BlogCardImg} className="w-full mb-4 rounded-t-lg object-center" />
       <div className="px-4">
           <p className="text-gray-400 mb-4">{BlogCardDate}</p>
           <h2 className="mb-4 font-bold">{BlogCardHeading}</h2>
           <p className="mb-8">{BlogCardtext}</p>
       </div>
   </div>
)
}
   
