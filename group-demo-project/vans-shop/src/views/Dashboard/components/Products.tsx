import React from "react";
import { createUseStyles } from "react-jss";
import { ICartItemRequest } from "../../../models/Cart";
import { IProduct } from "../../../models/Product";
import ProductItem from "./ProductItem";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20
  }
});

interface IProductsProps {
  products: IProduct[];
  addProductToCart: (cartItem: ICartItemRequest) => void;
}

const Products: React.FC<IProductsProps> = ({ products, addProductToCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} addProductToCart={addProductToCart} />
      ))}
    </div>
  );
};

export default Products;
