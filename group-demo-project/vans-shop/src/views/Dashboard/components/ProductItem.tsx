import React from "react";
import { createUseStyles } from "react-jss";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Button from "../../../common/components/Button";
import theme from "../../../common/theme";
import { IProduct } from "../../../models/Product";
import { ICartItemRequest } from "../../../models/Cart";

const useStyles = createUseStyles({
  card: {
    boxShadow: theme.boxShadow.box
  },
  productImg: {
    objectFit: "contain",
    padding: theme.spacing.l
  },
  productTitle: {
    marginTop: -theme.spacing.l,
    marginBottom: theme.spacing.m
  },
  productPrice: {
    "& > span": {
      color: theme.colors.darkGrayOpacity,
      fontWeight: "bold"
    }
  },
  productSize: {
    "& > span": {
      color: theme.colors.darkGrayOpacity,
      fontWeight: "bold"
    }
  },
  productDesc: {
    color: theme.colors.darkGrayOpacity,
    lineHeight: theme.font.lineHeight.m,
    margin: 0
  }
});

interface IProductItemProps {
  product: IProduct;
  addProductToCart: (cartItem: ICartItemRequest) => void;
}

const ProductItem: React.FC<IProductItemProps> = ({ product, addProductToCart }) => {
  const classes = useStyles();

  const handleAddProductToCart = (productItem: IProduct) => {
    const cartItem = {
      name: productItem.name,
      price: productItem.price,
      size: productItem.size,
      imageUrl: productItem.imageUrl
    };
    addProductToCart(cartItem);
  };

  return (
    <Card sx={{ maxWidth: 400 }} className={classes.card}>
      <CardMedia
        className={classes.productImg}
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.imageUrl}
      />
      <CardContent sx={{ p: 3 }}>
        <h4 className={classes.productTitle}>{product.name}</h4>
        <p className={classes.productPrice}>
          Price:<span>{` ${product.price} €`}</span>
        </p>
        <p className={classes.productSize}>
          Size:<span>{` ${product.size}`}</span>
        </p>
        <p className={classes.productDesc}>{product.description}</p>
      </CardContent>
      <CardActions sx={{ pr: 3, pl: 3, pb: 3 }}>
        <Button variant="contained" onClick={() => handleAddProductToCart(product)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
