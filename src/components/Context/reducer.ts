/* eslint-disable @typescript-eslint/no-explicit-any */

import { colorMap } from "../../globalConfig";

export default function reducer(state: any, action: any) {
  if (action.type === "SWITCH_THEME") {
    const color = action.payload ? colorMap["#eefffa"] : colorMap["#087f5b"];

    return {
      ...state,
      color: {
        colorPrimary: color["--main-color"],
        colorTextBase: color["--main-color"],
        colorBgBase: color["--btn-color"],
      },
    };
  }

  return state;
}
