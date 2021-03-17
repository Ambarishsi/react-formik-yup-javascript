import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormiKYupBootstrap from "./FormiKYupBootstrap";
import FormikYupMaterial from "./FormikYupMaterial";
import OnlyFormik from "./OnlyFormik";

function App() {
 
  
  return (
    
    <div className="App">
    
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={FormiKYupBootstrap} />
        <Route path="/FormikYupMaterial" component={FormikYupMaterial} />
        <Route path="/OnlyFormik" component={OnlyFormik} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;