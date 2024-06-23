import { useContext } from "react";
import { AppContext, StateProps } from ".";

const useGlobalContext = (): StateProps => {
  return useContext(AppContext)!;
};

export default useGlobalContext;
