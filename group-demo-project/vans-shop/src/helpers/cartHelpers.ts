import { ICartItem } from "../models/Cart";

const CartHelpers = {
  calculateCartTotal: (cartItems: ICartItem[]) => cartItems.reduce((acc, cur) => acc + cur.price, 0)
};

export default CartHelpers;
