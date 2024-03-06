export interface Created_By{
    id: string;
    name: string;
    email: string;
    password: string;
    contactNumber: number;
    role: string;
    createdAt: string;
    updatedAt:string;
    deletedAt: string | null
  }


export interface SingleBlogInterface{
    id: string;
    title: string;
    description: string;
    blog_image: string;
    is_featured: boolean;
    created_by_id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null,
    blog_category_id: string;
    created_by: Created_By
  }