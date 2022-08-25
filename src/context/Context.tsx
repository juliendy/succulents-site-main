import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  shoppingCartReducer,
  shoppingCartSubTotalReducer,
  ProductActions,
  ShoppingCartActions,
  ShoppingCartSubTotalActions,
} from "./Reducers";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: string;
  button: boolean;
  previousQuantity: string;
  currentQuantity: string;
  category: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
  shoppingCartSubTotal: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
  shoppingCartSubTotal: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<
    ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
  >;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart, shoppingCartSubTotal }: InitialStateType,
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(products, shoppingCart, action),
  shoppingCartSubTotal: shoppingCartSubTotalReducer(
    products,
    shoppingCartSubTotal,
    action
  ),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
