import React from "react";
import { OrangeButton } from "../reusableComponents/ButtonOrange";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

type AddToCartButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <div className="add-to-cart-button">
      <OrangeButton variant="contained" color="primary" onClick={onClick}>
        <ShoppingCartIcon
          className="add-to-cart-button-icon"
          style={{ fontSize: "26px" }}
        />
        ADD TO CART
      </OrangeButton>
    </div>
  );
}
