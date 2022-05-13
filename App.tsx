import React, { FC, memo,  } from "react";
import MapScreen from "./src/containers/MapScreen";

const App: FC = () => {
  return (
    <MapScreen />
  );
};

export default memo(App);
