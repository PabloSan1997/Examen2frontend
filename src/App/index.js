import React from "react";
import {  Provedor } from "../contextos/index.js";
import { AppUi } from "./AppUi.js";
import './index.css';
function App() {
  return (
    <Provedor>
         <AppUi/>
    </Provedor>
  );
}

export default App;
