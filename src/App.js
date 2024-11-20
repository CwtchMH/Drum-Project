import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import DrumApp from "./DrumApp";

const App = () => {
  return (
    <Provider store={store}>
      <DrumApp />
    </Provider>
  );
};

export default App;
