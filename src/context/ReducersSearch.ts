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
  UpdateLetters = "UPDATE_LETTERS",
}

type ProductPayload = {
  [Types.UpdateLetters]: {
    search: string;
  };
};

export type SearchActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const searchReducer = (state: string, action: SearchActions) => {
  switch (action.type) {
    case Types.UpdateLetters:
      return action.payload.search;

    default:
      return state;
  }
};

