import React , {useState} from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.component";
import Homepage from "./pages/Homepage.component"; 
import Shoppage from "./pages/Shop.component.js";


const App = () => {
  return (
      <div>
        <Header />
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path="/shop" exact component={Shoppage} />
        </Switch>
        
      </div>
     
  );
}

export default App;
