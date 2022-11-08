import { Grid } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { CartItemApi, ProductsApi } from "../../api";
import useEffectAsync from "../../common/hooks/useEffectAsync";
import theme from "../../common/theme";
import { ICartItem, ICartItemRequest } from "../../models/Cart";
import { IProduct } from "../../models/Product";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const useStyles = createUseStyles({
  container: {
    marginTop: theme.spacing.xl
  },
  title: {
    paddingBottom: theme.spacing.l,
    borderBottom: [1, "solid", theme.colors.mediumGray]
  }
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await ProductsApi.getProducts();
      if (response?.data && response?.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      throw new Error("Unable to fetch products");
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await CartItemApi.getCartItems();
      if (response?.data && response?.status === 200) {
        setCartItems(response.data);
      }
    } catch (error) {
      throw new Error("Unable to fetch products");
    }
  };

  const addProductToCart = async (cartItem: ICartItemRequest) => {
    try {
      const response = await CartItemApi.saveCartItem(cartItem);
      if (response?.data && response?.status === 201) {
        setCartItems([...cartItems, response.data]);
      }
    } catch {
      throw new Error("Unable to save product into cart");
    }
  };

  const removeCartItem = async (cartItemId: number) => {
    try {
      await CartItemApi.removeCartItem(cartItemId);
      const newCartItems = cartItems?.filter((cartItem) => cartItem.id !== cartItemId);
      setCartItems(newCartItems);
    } catch {
      throw new Error("Unable to remove product from cart");
    }
  };

  useEffectAsync(async () => Promise.all([fetchProducts(), fetchCartItems()]), []);

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Dashboard</h3>
      <Grid container spacing={2}>
        <Grid item lg={7}>
          <Products products={products} addProductToCart={addProductToCart} />
        </Grid>
        <Grid item lg={5}>
          <ShoppingCart cartItems={cartItems} removeCartItem={removeCartItem} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
