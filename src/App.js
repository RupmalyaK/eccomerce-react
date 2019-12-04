import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import {auth, createUserProfileDoc} from "./firebase/firebase.util.js";
import {useSelector , useDispatch} from "react-redux"; 
import {Route , Switch , Redirect} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Home.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUpPage from "./pages/SignIn&SignUp.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import {selectCurrentUser,selectUnsubscriber} from "./redux/user/user.selector.js";
import {checkSessionAsync} from "./redux/user/user.action.js";
import {selectIsSigningIn, selectIsCheckingSession} from "./redux/user/user.selector.js";
import Layout from "./components/Layout.jsx"; 

const LayoutWithLoadingSpinner = LoadingSpinner(Layout);


const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
  const isCheckingSession = useSelector(selectIsCheckingSession);
  const currentUser = useSelector(selectCurrentUser);
  const unsubscriber = useSelector(selectUnsubscriber);
  const isSigningIn = useSelector(selectIsSigningIn);
  const dispatch = useDispatch();
 
 

  useEffect(() => {
    dispatch(checkSessionAsync());
    const handleUnmount = () => console.log("component unmounet app::DEBUGGG"); 
    return handleUnmount; 
  },[]);
  

    return (
      <Container>
        <GlobalStyle />
        <LayoutWithLoadingSpinner isLoading={isSigningIn || isCheckingSession}>
        <Header/>
        <Switch>
          <Route path='/test' exact component={LoadingSpinner} />
          <Route path='/' exact component={Homepage} />
          <Route path="/shop/:match?"  component={Shoppage} />
          <Route path="/signin" exact render = {
            () => (
              currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>)
              }  /> 
           <Route path="/checkout" exact component={CheckoutPage} />   
          
        </Switch>
       </LayoutWithLoadingSpinner>
      </Container>
  );
}


export default App;
