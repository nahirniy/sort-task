export interface IBook {
  id: number;
  name: string;
  price: number;
  category?: string;
}

export enum Price {
  PRICE_UP = "price-up",
  PRICE_DOWN = "price-down",
}
