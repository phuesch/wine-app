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

interface Review {
  wineId: string;
  id: string;
  name: string;
  rating: number;
  text: string;
}

const wine: Wine[] = [
  {
    id: "blankoBarrica2019",
    name: "Blanko Barrica",
    year: 2019,
    type: "Chardonnay",
    specialties: "Im Eichenfass gereift",
    vol: 14.0,
    description: "This is an excellent wine as a companion for frogggg.",
    price: "16,50€",
    imagePath: "/pictures/blanco-barrica-wine-picture.jpg",
  },
  {
    id: "rosado2019",
    name: "Rosado",
    year: 2019,
    type: "Merlot, Chardonnay, Sauvignon Blanc",
    vol: 13.0,
    description:
      "This is an excellent wine for warm summerdays, fresh and light with a sprinkle of strawberrys.",
    price: "13,90€",
    imagePath: "/pictures/rosado-wine-picture.jpg",
  },
  {
    id: "blanko2019",
    name: "Blanko",
    year: 2019,
    type: "Chardonnay",
    vol: 13.0,
    description: "This wine captivates through a light but dry taste.",
    price: "13,90€",
    imagePath: "/pictures/blanco-wine-picture.jpg",
  },
];

export default wine;
