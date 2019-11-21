import React from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx"; 
import Shoppage from "./pages/Shop.jsx";


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
