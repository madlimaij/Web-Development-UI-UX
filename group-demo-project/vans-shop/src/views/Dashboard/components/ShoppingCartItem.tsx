import React from "react";
import { createUseStyles } from "react-jss";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import theme from "../../../common/theme";
import Button from "../../../common/components/Button";
import { ICartItem } from "../../../models/Cart";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    boxShadow: theme.boxShadow.box,
    alignItems: "center",
    marginBottom: theme.spacing.m
  },
  cardContent: {
    paddingBottom: 0
  },
  productTitle: {
    margin: 0
  },
  productImg: {
    objectFit: "contain",
    padding: theme.spacing.l
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
    },
    marginBottom: 0
  },
  productDetails: {
    display: "flex",
    alignItems: "center"
  }
});

interface IShoppingCartItemProps {
  cartItem: ICartItem;
  removeCartItem: (cartItemId: number) => void;
}

const ShoppingCartItem: React.FC<IShoppingCartItemProps> = ({ cartItem, removeCartItem }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box>
        <CardMedia
          className={classes.productImg}
          component="img"
          sx={{ width: 151 }}
          image={cartItem.imageUrl}
          alt={cartItem.imageUrl}
        />
      </Box>
      <Box sx={{ flex: "1" }}>
        <CardContent className={classes.cardContent}>
          <h4 className={classes.productTitle}>{cartItem.name}</h4>
          <p className={classes.productPrice}>
            Price:<span>{` ${cartItem.price} €`}</span>
          </p>
          <p className={classes.productSize}>
            Size:<span>{` ${cartItem.size}`}</span>
          </p>
        </CardContent>
      </Box>
      <Box sx={{ mr: 3 }}>
        <Button variant="contained" onClick={() => removeCartItem(cartItem.id)}>
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default ShoppingCartItem;
