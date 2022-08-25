import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { Types } from "../../context/Reducers";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CartContentsTitle from "./CartContentsTitle";
import EachItemInCartMobile from "./EachItemInCartMobile";
import EachItemInCartBiggerScreen from "./EachItemInCartBiggerScreen";

const ProductInCart = () => {
  const { state, dispatch } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width:599px)");

  const handleChangeQuantity_TextField = (id: string, payload: string) => {
    dispatch({
      type: Types.QuantityChange_TextField,
      payload: { id, quantity: payload },
    });
  };

  const handleUpdateQuantity_TextField = (
    id: string,
    quantity: string,
    price: number
  ) => {
    dispatch({
      type: Types.QuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.TotalQuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_TextField,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if (quantity === "0") {
      deleteProduct(id, quantity, price);
    }
  };

  const handleUpdateQuantity_DropDown = (
    id: string,
    quantity: string,
    price: number,
    payload: unknown
  ) => {
    dispatch({
      type: Types.QuantitySet_DropDown,
      payload: { id, quantity: payload },
    });
    dispatch({
      type: Types.TotalQuantitySet_DropDown,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_DropDown,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if (payload === "0") {
      deleteProduct(id, payload, price);
    }
  };

  const deleteProduct = (id: string, quantity: string, price: number) => {
    dispatch({
      type: Types.Delete,
      payload: { id },
    });
    dispatch({
      type: Types.Decrease,
      payload: { quantity },
    });
    dispatch({
      type: Types.SubTotalDecrease,
      payload: { price, quantity },
    });
  };

  return (
    <div>
      {!isMobile && <CartContentsTitle />}
      {state.products.map((productInCart) => (
        <div key={productInCart.id}>
          <hr />
          {isMobile ? (
            <EachItemInCartMobile
              category={productInCart.category}
              id={productInCart.id}
              image={productInCart.image}
              quantity={productInCart.quantity}
              price={productInCart.price}
              name={productInCart.name}
              currentQuantity={productInCart.currentQuantity}
              button={productInCart.button}
              handleChangeQuantity_TextField={handleChangeQuantity_TextField}
              handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
              handleUpdateQuantity_DropDown={handleUpdateQuantity_DropDown}
              deleteProduct={deleteProduct}
            />
          ) : (
            <EachItemInCartBiggerScreen
              category={productInCart.category}
              id={productInCart.id}
              image={productInCart.image}
              quantity={productInCart.quantity}
              price={productInCart.price}
              name={productInCart.name}
              currentQuantity={productInCart.currentQuantity}
              button={productInCart.button}
              handleChangeQuantity_TextField={handleChangeQuantity_TextField}
              handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
              handleUpdateQuantity_DropDown={handleUpdateQuantity_DropDown}
              deleteProduct={deleteProduct}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductInCart;
