import { useContext } from "react";
import { AppContext } from "../../context/Context";

const TotalInCart = () => {
  const { state } = useContext(AppContext);

  if (!state.shoppingCart && !state.shoppingCartSubTotal) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <div className="total-quantity-in-cart">Total Quantity:</div>
          <div className="total-quantity-in-cart">{state.shoppingCart}</div>
        </div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <div className="sub-total-in-cart">Subtotal:</div>
          <div className="sub-total-in-cart">
            {state.shoppingCartSubTotal} Eur
          </div>
        </div>
      </div>
    );
  }
};

export default TotalInCart;
