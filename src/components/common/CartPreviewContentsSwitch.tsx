import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/Context";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "./NavigationItemStyles";

type CartPreviewContentsProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const CartPreviewContentsSwitch = ({ onClick }: CartPreviewContentsProps) => {
  const classes = useStyles();

  const { state } = useContext(AppContext);

  if (state.products[0] == null) {
    return (
      <div className="no-product-in-cart-preview">
        There is no product in your cart.
      </div>
    );
  } else {
    return (
      <div>
        {state.products.map((productInCart) => (
          <Card className={classes.root} key={productInCart.id}>
            <NavLink
              to={`/product/${productInCart.category}/${productInCart.id}`}
              onClick={onClick}
            >
              <CardMedia
                className={classes.cover}
                image={productInCart.image}
                title="Product"
              />
            </NavLink>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div>
                  <div className="product-name-in-cart-preview">
                    {productInCart.name}
                  </div>
                  <div className="sub-info-in-cart-preview">
                    {productInCart.price} Eur
                  </div>
                  <div className="sub-info-in-cart-preview">
                    Quantity: {productInCart.quantity}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    );
  }
};

export default CartPreviewContentsSwitch;
