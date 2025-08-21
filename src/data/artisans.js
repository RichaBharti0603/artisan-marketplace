// src/data/artisans.js
export const ARTISANS = [
  {
    id: "madhubani-01",
    name: "Ramesh Kumar",
    craft: "Madhubani Painting",
    region: "Bihar",
    price: 2500,
    tags: ["painting", "folk-art"],
    image: "/images/image1.jpg",
    story:
      "Carrying forward a 500-year-old tradition of Bihar art with natural dyes and intricate motifs.",
    materials: "Handmade paper, natural dyes",
    stock: 5
  },
  {
    id: "terracotta-01",
    name: "Sita Devi",
    craft: "Terracotta Pottery",
    region: "West Bengal",
    price: 1200,
    tags: ["pottery", "clay"],
    image: "/images/image3.jpg",
    story:
      "Sculpting clay with love—form meets function using earthen techniques passed down generations.",
    materials: "Clay, kiln-fired",
    stock: 12
  },
  {
    id: "carpet-01",
    name: "Imran Khan",
    craft: "Handwoven Carpet",
    region: "Kashmir",
    price: 5000,
    tags: ["weaving", "textile"],
    image: "/images/image2.jpg",
    story:
      "Fine Kashmiri weave with Persian influences, each knot a mark of time and patience.",
    materials: "Wool/silk blend",
    stock: 2
  }
];

export const CATEGORIES = [
  "All",
  "Painting",
  "Pottery",
  "Textile",
  "Woodwork",
  "Metalwork",
  "Jewellery"
];

export const REGIONS = ["All", "Bihar", "West Bengal", "Kashmir", "Rajasthan", "Gujarat"];
