interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  size: number;
  imageUrl: string;
}

interface IProductRequest {
  name: string;
  description: string;
  price: number;
  size: number;
  imageUrl: string;
}

export type { IProduct, IProductRequest };
