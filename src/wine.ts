interface Wine {
  id: string;
  name: string;
  year: number;
  type: string;
  specialties?: string;
  vol: number;
  description: string;
  price: string;
  imagePath: string;
  rating?: number;
  reviews?: Review[];
  reviewPictures?: ReviewPictures[];
}

export interface Review {
  wineId: string;
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface ReviewPictures {
  imagePath: string;
}

export default Wine;
