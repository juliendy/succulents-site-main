import React, { createContext, useReducer, Dispatch } from "react";
import { searchReducer, SearchActions } from "./ReducersSearch";

type InitialStateType = {
  search: string;
};

const initialState = {
  search: "",
};

const AppContextSearch = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<SearchActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ search }: InitialStateType, action: SearchActions) => ({
  search: searchReducer(search, action),
});

const AppProviderSearch: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContextSearch.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContextSearch.Provider>
  );
};

export { AppProviderSearch, AppContextSearch };
