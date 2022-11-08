interface ICartItem {
  id: number;
  name: string;
  price: number;
  size: number;
  imageUrl: string;
}

interface ICartItemRequest {
  name: string;
  price: number;
  size: number;
  imageUrl: string;
}

export type { ICartItem, ICartItemRequest };
