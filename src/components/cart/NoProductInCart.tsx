import ContinueShoppingButton from "./ContinueShoppingButton";

const NoProductInCart = () => {
  return (
    <div className="no-product-in-cart-preview">
      There is no product in your cart.
      <div style={{ maxWidth: "270px" }}>
        <ContinueShoppingButton />
      </div>
    </div>
  );
};

export default NoProductInCart;
