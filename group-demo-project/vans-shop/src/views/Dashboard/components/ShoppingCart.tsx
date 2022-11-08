import React from "react";
import { createUseStyles } from "react-jss";
import CartIcon from "@mui/icons-material/ShoppingCart";
import theme from "../../../common/theme";
import ShoppingCartItem from "./ShoppingCartItem";
import CartHelpers from "../../../helpers/cartHelpers";
import { ICartItem } from "../../../models/Cart";

const useStyles = createUseStyles({
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.l
  },
  cartTitleContainer: {
    display: "flex",
    alignItems: "center"
  },
  cartTitle: {
    margin: 0,
    marginRight: theme.spacing.s
  }
});

interface IShoppingCartProps {
  cartItems: ICartItem[];
  removeCartItem: (cartItemId: number) => void;
}

const ShoppingCart: React.FC<IShoppingCartProps> = ({ cartItems, removeCartItem }) => {
  const classes = useStyles();
  const cartTotal = CartHelpers.calculateCartTotal(cartItems);

  return (
    <div>
      <div className={classes.cartHeader}>
        <div className={classes.cartTitleContainer}>
          <h3 className={classes.cartTitle}>Shopping Cart</h3>
          <CartIcon />
        </div>
        {cartItems.length > 0 && (
          <h3 className={classes.cartTitle}>{`Cart Total (${cartTotal} €)`}</h3>
        )}
      </div>
      {cartItems.length === 0 && <p>Your shopping cart is currently empty!</p>}
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => (
          <ShoppingCartItem key={cartItem.id} cartItem={cartItem} removeCartItem={removeCartItem} />
        ))}
    </div>
  );
};

export default ShoppingCart;
