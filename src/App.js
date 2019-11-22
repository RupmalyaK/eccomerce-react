import React from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUp from "./pages/SignIn&SignUp.jsx";


const App = () => {
  return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/shop" exact component={Shoppage} />
          <Route path="/signin" exact component={SignInAndSignUp} />
        </Switch>
        
      </div>
     
  );
}

export default App;
