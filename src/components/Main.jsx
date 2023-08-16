import React from "react";
import CatCard from './CatCard'
import BreedSelect from "./BreedSelect";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import "./Main.css";
const Main = () => {

  return (
    <Provider store={store}>
      <React.Fragment>
        <div className="app">
            <BreedSelect/>
            <CatCard />
        </div>
      </React.Fragment>
    </Provider>
  );
};

export default Main;