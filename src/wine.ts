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
    reviews: [
      {
        wineId: "blankoBarrica2019",
        id: "FirstReview",
        name: "Hans Hansen",
        rating: 4.5,
        text:
          "Excellent wine, we enjoyed it for dinner and it was really fruity and delightful.",
      },
      {
        wineId: "blankoBarrica2019",
        id: "SecondReview",
        name: "Klaus Klausen",
        rating: 4.3,
        text:
          "A very tasty wine. Could have been a bit more fruity for my taste, but still delicious.",
      },
    ],
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
    imagePath: "/pictures/rosado-wine-picture-new.jpg",
    reviews: [
      {
        wineId: "rosado2019",
        id: "FirstReview",
        name: "Jan Jansen",
        rating: 4.8,
        text:
          "A wonderful biodynamic Rosé! We enjoyed it with our lunch at Marc Fosh, just the perfect oasis in the middle of the hot streets of Palma. The kind of wine so refreshing and elegant, that the Bottle goes down without notice. Mallorca, Spain.",
      },
      {
        wineId: "rosado2019",
        id: "SecondReview",
        name: "Max Maxen",
        rating: 4.3,
        text:
          "Fruchtig kräftiger Sommer Rose. Erdbeeren, mittlere Säure, mittlerer Abgang",
      },
    ],
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
    reviews: [
      {
        wineId: "blanko2019",
        id: "FirstReview",
        name: "Horst Horsten",
        rating: 4.8,
        text:
          "Sehr guter leichter, trockener Wein. Ein richtig guter Sommerwein.",
      },
      {
        wineId: "blanko2019",
        id: "SecondReview",
        name: "Frank Franken",
        rating: 4.3,
        text: "Mejor chardonnay de Mallorca",
      },
    ],
  },
];

export default wine;
