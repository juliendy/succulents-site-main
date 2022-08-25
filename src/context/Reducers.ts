type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Increase = "ADD_QUANTITY",
  Decrease = "REDUCE_QUANTITY",
  SubTotalIncrease = "ADD_SUBTOTAL",
  SubTotalDecrease = "REDUCE_SUBTOTAL",
  QuantityChange_TextField = "CHANGE_QUANTITY_T",
  QuantitySet_TextField = "SET_QUANTITY_T",
  QuantitySet_DropDown = "SET_QUANTITY_D",
  TotalQuantitySet_TextField = "SET_TOTALQUANTITY_T",
  TotalQuantitySet_DropDown = "SET_TOTALQUANTITY_D",
  SubTotalSet_TextField = "SET_SUBTOTAL_T",
  SubTotalSet_DropDown = "SET_SUBTOTAL_D",
  PreviousQuantitySet = "PREVIOUS_QUANTITY_SET",
}

// Product

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

type ProductPayload = {
  [Types.Add]: {
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
  [Types.Delete]: {
    id: string;
  };
  [Types.QuantityChange_TextField]: {
    id: string;
    quantity: string;
  };
  [Types.QuantitySet_TextField]: {
    id: string;
    quantity: string;
  };
  [Types.QuantitySet_DropDown]: {
    id: string;
    quantity: unknown;
  };
  [Types.PreviousQuantitySet]: {
    id: string;
    quantity: string;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.Add:
      const existingSameProduct = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const existingSameProductIndex = [...state].indexOf(
        existingSameProduct[0]
      );
      if (existingSameProduct[0]) {
        const existingSameProductQuantity = existingSameProduct.map(
          (product) => product.quantity
        )[0];
        const updatedQuantity = (
          parseInt(existingSameProductQuantity) +
          parseInt(action.payload.quantity)
        ).toString();
        [...state][existingSameProductIndex].quantity = updatedQuantity;
        [...state][existingSameProductIndex].previousQuantity = updatedQuantity;
        [...state][existingSameProductIndex].currentQuantity = updatedQuantity;
        return [...state];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: action.payload.quantity,
            button: action.payload.button,
            previousQuantity: action.payload.quantity,
            currentQuantity: action.payload.quantity,
            category: action.payload.category,
          },
        ];
      }

    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];

    case Types.QuantityChange_TextField:
      const modifiedProduct = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex = [...state].indexOf(modifiedProduct[0]);
      const newValue = action.payload;
      var updatedQuantity = parseInt(newValue.quantity).toString();
      [...state][modifiedProductIndex].button = true;
      if (Number.isNaN(parseInt(newValue.quantity))) {
        updatedQuantity = "0";
        [...state][modifiedProductIndex].quantity = updatedQuantity;
        return [...state];
      } else {
        [...state][modifiedProductIndex].quantity = updatedQuantity;
        return [...state];
      }

    case Types.QuantitySet_TextField:
      const modifiedProduct2 = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex2 = [...state].indexOf(modifiedProduct2[0]);
      [...state][modifiedProductIndex2].button = false;
      const updatedQuantity3 = action.payload.quantity;
      [...state][modifiedProductIndex2].currentQuantity = updatedQuantity3;
      return [...state];

    case Types.QuantitySet_DropDown:
      const modifiedProduct3 = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex3 = [...state].indexOf(modifiedProduct3[0]);
      const newValue2 = action.payload;
      if (typeof newValue2.quantity === "string") {
        const updatedQuantity = parseInt(newValue2.quantity).toString();
        [...state][modifiedProductIndex3].quantity = updatedQuantity;
        [...state][modifiedProductIndex3].currentQuantity = updatedQuantity;
        return [...state];
      } else return [...state];

    case Types.PreviousQuantitySet:
      const modifiedProduct4 = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex4 = [...state].indexOf(modifiedProduct4[0]);
      const newValue3 = action.payload;
      const updatedQuantity2 = parseInt(newValue3.quantity).toString();
      [...state][modifiedProductIndex4].previousQuantity = updatedQuantity2;
      return [...state];

    default:
      return state;
  }
};

// ShoppingCartQuantity

type ShoppingCartPayload = {
  [Types.Increase]: {
    quantity: string;
  };
  [Types.Decrease]: {
    quantity: string;
  };
  [Types.TotalQuantitySet_TextField]: { id: string; quantity: string };
  [Types.TotalQuantitySet_DropDown]: { id: string; quantity: string };
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  productState: ProductType[],
  state: number,
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.Increase:
      return state + parseInt(action.payload.quantity);

    case Types.Decrease:
      return state - parseInt(action.payload.quantity);

    case Types.TotalQuantitySet_TextField:
      const modifiedProduct = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductQuantity = modifiedProduct.map(
        (product) => product.quantity
      )[0];
      const modifiedProductIndex = [...productState].indexOf(
        modifiedProduct[0]
      );

      if (
        // Case1: 10 to (11-), coming back to 10 and go up again included. Case2: (1-9) => 10 => (1-9).
        (parseInt([...productState][modifiedProductIndex].previousQuantity) <=
          9 &&
          parseInt(modifiedProductQuantity) >= 11) ||
        (parseInt([...productState][modifiedProductIndex].previousQuantity) <=
          9 &&
          parseInt(modifiedProductQuantity) <= 9)
      ) {
        [...productState][modifiedProductIndex].previousQuantity = "10";
        const offset =
          parseInt(modifiedProductQuantity) -
          parseInt([...productState][modifiedProductIndex].previousQuantity);
        return state + offset;
      } else if (
        // Case1: test (11-) to (1-9). Case 2: (11-) => 10, (11-) => 10 => (11-). Case3: (11-) => 10 => (1-9).
        (parseInt([...productState][modifiedProductIndex].previousQuantity) >=
          11 &&
          parseInt(modifiedProductQuantity) <= 9) ||
        (parseInt(modifiedProductQuantity) >= 10 &&
          parseInt([...productState][modifiedProductIndex].previousQuantity) >=
            10) ||
        (parseInt([...productState][modifiedProductIndex].previousQuantity) ===
          10 &&
          parseInt(modifiedProductQuantity) <= 9)
      ) {
        const offset =
          parseInt(modifiedProductQuantity) -
          parseInt([...productState][modifiedProductIndex].previousQuantity);
        return state + offset;
      } else return state;

    case Types.TotalQuantitySet_DropDown:
      const modifiedProduct2 = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductQuantity2 = modifiedProduct2.map(
        (product) => product.quantity
      )[0];
      if (
        // Case: (1-9) to (1-10), upward and downward, but backward 10 => (1-9) excluded.
        parseInt(modifiedProductQuantity2) <= 10 &&
        parseInt(action.payload.quantity) <= 9
      ) {
        var offset =
          parseInt(modifiedProductQuantity2) -
          parseInt(action.payload.quantity);
        return state + offset;
      } else return state;
    default:
      return state;
  }
};

// ShoppingCartSubTotal

type ShoppingCartSubTotalPayload = {
  [Types.SubTotalIncrease]: {
    price: number;
    quantity: string;
  };
  [Types.SubTotalDecrease]: {
    price: number;
    quantity: string;
  };
  [Types.SubTotalSet_TextField]: {
    id: string;
    price: number;
    quantity: string;
  };
  [Types.SubTotalSet_DropDown]: { id: string; price: number; quantity: string };
};

export type ShoppingCartSubTotalActions =
  ActionMap<ShoppingCartSubTotalPayload>[keyof ActionMap<ShoppingCartSubTotalPayload>];

export const shoppingCartSubTotalReducer = (
  productState: ProductType[],
  state: number,
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.SubTotalIncrease:
      return state + action.payload.price * parseInt(action.payload.quantity);

    case Types.SubTotalDecrease:
      return state - action.payload.price * parseInt(action.payload.quantity);

    case Types.SubTotalSet_TextField:
      const modifiedProduct = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductPrice = modifiedProduct.map(
        (product) => product.price
      )[0];
      const modifiedProductQuantity = modifiedProduct.map(
        (product) => product.quantity
      )[0];
      const modifiedProductIndex = [...productState].indexOf(
        modifiedProduct[0]
      );
      const offset =
        modifiedProductPrice * parseInt(modifiedProductQuantity) -
        action.payload.price *
          parseInt([...productState][modifiedProductIndex].previousQuantity);
      return state + offset;

    case Types.SubTotalSet_DropDown:
      const modifiedProduct2 = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductPrice2 = modifiedProduct2.map(
        (product) => product.price
      )[0];
      const modifiedProductQuantity2 = modifiedProduct2.map(
        (product) => product.quantity
      )[0];
      const offset2 =
        modifiedProductPrice2 * parseInt(modifiedProductQuantity2) -
        action.payload.price * parseInt(action.payload.quantity);
      return state + offset2;

    default:
      return state;
  }
};
