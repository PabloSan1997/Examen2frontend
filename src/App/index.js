import React from "react";
import {  Provedor } from "../contextos/index.js";
import { AppUi } from "./AppUi.js";


function App() {
  return (
    <Provedor>
         <AppUi/>
    </Provedor>
  );
}

export default App;
