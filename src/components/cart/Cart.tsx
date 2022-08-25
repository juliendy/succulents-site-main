import { useContext } from "react";
import { AppContext } from "../../context/Context";
import CheckOutButton from "./CheckOutButton";
import ContinueShoppingButton from "./ContinueShoppingButton";
import NoProductInCart from "./NoProductInCart";
import ProductInCart from "./ProductInCart";
import CartContainer from "./CartContainer";
import TotalInCart from "./TotalInCart";

const Cart = () => {
  const { state } = useContext(AppContext);

  const CartContents = () => {
    if (state.products[0] == null) {
      return <NoProductInCart />;
    } else {
      return (
        <div>
          <ProductInCart />
          <hr />
          <div className="total-in-cart">
            <TotalInCart />
            <ContinueShoppingButton />
            <CheckOutButton />
          </div>
        </div>
      );
    }
  };

  return (
    <CartContainer>
      <div className="title-in-cart">YOUR SHOPPING CART</div>
      <CartContents />
    </CartContainer>
  );
};

export default Cart;
