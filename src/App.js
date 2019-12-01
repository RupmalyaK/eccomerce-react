import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import {auth, createUserProfileDoc} from "./firebase/firebase.util.js";
import {useSelector , useDispatch} from "react-redux"; 
import setCurrentUser from "./redux/user/user.action.js";
import {Route , Switch , Redirect} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Home.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUpPage from "./pages/SignIn&SignUp.jsx";
import CheckoutPage from "./pages/Checkout.jsx";






const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch(); 
 
  useEffect(
    () => {
      let unsubscribeFromAuth = null;
      unsubscribeFromAuth = auth.onAuthStateChanged(
        async userAuth => {
        if(userAuth)
          { 
            const userRef = await createUserProfileDoc(userAuth); 

            userRef.onSnapshot(snapshot => {
                dispatch(setCurrentUser({
                  id:snapshot.id,
                  ...snapshot.data()
                })); 
            });
            return;
          }
          dispatch(setCurrentUser(userAuth)); 
          return;
        }
      ); 
      
      const handleUnmount = () => unsubscribeFromAuth();
      return handleUnmount;
    },[]); 
    
   
    return (
      <Container>
        <GlobalStyle />
        <Header/>
        <Pages>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/shop/:match?"  component={Shoppage} />
          <Route path="/signin" exact render = {
            () => (
              currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>)
              }  /> 
           <Route path="/checkout" exact component={CheckoutPage} />   
          
        </Switch>
        </Pages>
      </Container>
  );
}

export default App;
