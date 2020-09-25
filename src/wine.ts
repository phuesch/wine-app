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
}

export interface Review {
  wineId: string;
  id: string;
  name: string;
  rating: number;
  text: string;
}

export default Wine;
