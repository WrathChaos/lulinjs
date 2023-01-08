import React from "react";
import { capitalizeFirstLetter } from "../../../../lib/lulin";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  capitalizeFirstLetter,
};
export default ReactLiveScope;
