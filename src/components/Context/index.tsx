/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useReducer } from "react";
import reducer from "./reducer";
import { colorMap } from "../../globalConfig";

export type StateProps = {
  color: {
    colorPrimary: string;
    colorTextBase: string;
    colorBgBase: string;
  };

  switchTheme?: (arg: boolean) => void;
};

export const AppContext = createContext(null);
const initialState: StateProps = {
  color: {
    colorPrimary: colorMap["#087f5b"]["--main-color"],
    colorTextBase: colorMap["#087f5b"]["--main-color"],
    colorBgBase: colorMap["#087f5b"]["--bg-color"],
  },
};

export default function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const switchTheme = (isDark: boolean) => {
    dispatch({ type: "SWITCH_THEME", payload: isDark });
  };

  return (
    <AppContext.Provider value={{ ...state!, switchTheme } as any}>
      {children}
    </AppContext.Provider>
  );
}
