import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css"
import styles from "./components/Frase.module.css"
import Frase from "./components/Frase";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <Frase />
      <List/>
    </div>
  );
};

export default App;
