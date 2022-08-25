import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { GrayButton } from "../reusableComponents/ButtonGray";

type GoToCartButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function GoToCartButton({ onClick }: GoToCartButtonProps) {
  return (
    <div className="go-to-cart-button">
      <NavLink to="/cart">
        <GrayButton onClick={onClick} variant="contained" color="primary">
          <ShoppingCartIcon
            className="add-to-cart-button-icon-in-cart-preview"
            style={{ fontSize: "26px" }}
          />
          View Cart
        </GrayButton>
      </NavLink>
    </div>
  );
}
