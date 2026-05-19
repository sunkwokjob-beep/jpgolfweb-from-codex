export type Product = {
  id: number;
  brand: string;
  name: string;
  spec: string;
  price: number;
  originalPrice: number;
  discount: string;
  tags: string[];
  accent: "red" | "green" | "blue" | "gold" | "black";
};

export const products: Product[] = [
  {
    id: 1,
    brand: "TaylorMade",
    name: "Qi10 Driver",
    spec: "10.5 / Diamana Blue TM50 (S)",
    price: 4680,
    originalPrice: 6280,
    discount: "-25%",
    tags: ["會員再折", "免運費"],
    accent: "black"
  },
  {
    id: 2,
    brand: "Callaway",
    name: "Paradym Ai Smoke Driver",
    spec: "10.5 / Tensei 50 (S)",
    price: 4380,
    originalPrice: 5480,
    discount: "-20%",
    tags: ["會員再折", "免運費"],
    accent: "blue"
  },
  {
    id: 3,
    brand: "PING",
    name: "G430 Max Driver",
    spec: "10.5 / ALTA J CB (S)",
    price: 4090,
    originalPrice: 5280,
    discount: "-23%",
    tags: ["POINTS UP", "免運費"],
    accent: "gold"
  },
  {
    id: 4,
    brand: "Titleist",
    name: "TSR2 Driver",
    spec: "10.5 / TSP111 (S)",
    price: 4580,
    originalPrice: 5780,
    discount: "-21%",
    tags: ["會員再折", "快速出貨"],
    accent: "black"
  },
  {
    id: 5,
    brand: "XXIO",
    name: "13 Driver",
    spec: "10.5 / MP1300 (R)",
    price: 3980,
    originalPrice: 5380,
    discount: "-26%",
    tags: ["輕量", "免運費"],
    accent: "blue"
  },
  {
    id: 6,
    brand: "Mizuno",
    name: "ST-X 230 Driver",
    spec: "10.5 / TOUR AD GM (S)",
    price: 3890,
    originalPrice: 4580,
    discount: "-15%",
    tags: ["會員再折", "免運費"],
    accent: "green"
  },
  {
    id: 7,
    brand: "PING",
    name: "G430 Hybrid",
    spec: "22 / ALTA J CB Black",
    price: 1980,
    originalPrice: 2480,
    discount: "-20%",
    tags: ["熱賣", "免運費"],
    accent: "gold"
  },
  {
    id: 8,
    brand: "Titleist",
    name: "Vokey SM9 Wedge",
    spec: "56 / 10S / Tour Chrome",
    price: 1280,
    originalPrice: 1580,
    discount: "-19%",
    tags: ["短桿王", "會員價"],
    accent: "black"
  },
  {
    id: 9,
    brand: "Scotty Cameron",
    name: "Super Select Putter",
    spec: "34 / Newport 2",
    price: 3280,
    originalPrice: 3880,
    discount: "-15%",
    tags: ["人氣", "免運費"],
    accent: "red"
  },
  {
    id: 10,
    brand: "Odyssey",
    name: "Ai-ONE Putter",
    spec: "7 DB / 34吋",
    price: 2180,
    originalPrice: 2680,
    discount: "-19%",
    tags: ["NEW", "POINTS UP"],
    accent: "blue"
  }
];

export const newArrivals: Product[] = [
  {
    id: 11,
    brand: "XXIO",
    name: "13 Iron Set",
    spec: "5-PW, SW / MP1300 (R)",
    price: 8980,
    originalPrice: 10800,
    discount: "NEW",
    tags: ["新品", "會員價"],
    accent: "gold"
  },
  {
    id: 12,
    brand: "TaylorMade",
    name: "Qi10 Max Fairway Wood",
    spec: "#3 / Diamana Blue TM50 (S)",
    price: 3280,
    originalPrice: 3980,
    discount: "NEW",
    tags: ["新品", "免運費"],
    accent: "black"
  },
  {
    id: 13,
    brand: "PING",
    name: "Blueprint S Iron Set",
    spec: "5-PW / DG EX Tour Issue",
    price: 10580,
    originalPrice: 12800,
    discount: "NEW",
    tags: ["新品", "Fitting"],
    accent: "green"
  },
  {
    id: 14,
    brand: "Odyssey",
    name: "Ai-ONE Putter",
    spec: "7 DB / 34吋",
    price: 2180,
    originalPrice: 2680,
    discount: "NEW",
    tags: ["新品", "POINTS UP"],
    accent: "blue"
  }
];
