import React , {useState} from 'react';
import Homepage from "./pages/Homepage.component"; 
import {Route , Switch} from "react-router-dom"; 
import Hatspage from "./pages/Hats.component.js";


const App = () => {
  return (
      <div>
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path="/hats" exact component={Hatspage} />
        </Switch>
        
      </div>
     
  );
}

export default App;
