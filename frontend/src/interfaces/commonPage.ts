export interface GalleryInterface {
  id: string;
  coverImage: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  pageId: string;
}

export interface CommonPageInterface {
  id: string;
  name: string;
  coverImage: string;
  title: string;
  titleDescription: string;
  pageDescription: string;
  createdAt: string;
  updatedAt: string;
  gallery: GalleryInterface[];
}
