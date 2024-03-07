import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return <Provider store={store}>Hello World</Provider>;
};

export default App;
