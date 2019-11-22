import React, {useState, useEffect} from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUp from "./pages/SignIn&SignUp.jsx";
import {auth} from "./firebase/firebase.util.js";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";

const Container = styled.div`
`;

const App = () => {
  const [currentUser , setCurrentUser] = useState(null); 
  let unsubscribeFromAuth = null;
  useEffect(
    () => {
      unsubscribeFromAuth = auth.onAuthStateChanged(
        user => {
          setCurrentUser(user); 
        }
      ); 

      return (
        () => {
          unsubscribeFromAuth(); 
        }
      );

    },[]);
    
  
    console.log(currentUser);
    return (
      <Container>
        <GlobalStyle />
        <Header currentUser = {currentUser} />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/shop" exact component={Shoppage} />
          <Route path="/signin" exact component={SignInAndSignUp} />
        </Switch>
      </Container>
     
  );
}

export default App;
