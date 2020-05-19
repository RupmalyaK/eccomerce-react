import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useSelector , useDispatch} from "react-redux"; 
import {Route , Switch , Redirect, useParams} from "react-router-dom"; 
import {useHistory} from "react-router-dom";
import {selectCurrentUser,selectUnsubscriber} from "./redux/user/user.selector.js";
import {checkSessionAsync} from "./redux/user/user.action.js";
import {selectIsSigningIn, selectIsCheckingSession, selectSignInError, selectSignUpError, selectIsSigningUp} from "./redux/user/user.selector.js";
import {selectIsFetching as selectIsFetchingItems} from "./redux/browse/browse.selector.js";
import Itempage from "./pages/Item";
import ReviewsAndRatings from "./components/ReviewsAndRatings";
import SignInAndSignUpPage from "./pages/SignIn&SignUp";
import CheckoutPage from "./pages/Checkout";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Homepage from "./pages/Home"; 
import Shoppage from "./pages/Shop";
import Layout from "./components/Layout"; 
import BrowsePage from "./pages/Browse";
import GlobalStyle from "./components/GlobalStyle";


const LayoutWithLoadingSpinner = LoadingSpinner(Layout);
const ItemPageWithLoadingSpinner = LoadingSpinner(Itempage);
const BrowsePageWithLoadingSpinner = LoadingSpinner(BrowsePage);


const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
  const isCheckingSession = useSelector(selectIsCheckingSession);
  const isFetchingItems = useSelector(selectIsFetchingItems);
  const currentUser = useSelector(selectCurrentUser);
  const isSigningIn = useSelector(selectIsSigningIn);
  const isSigningUp = useSelector(selectIsSigningUp);
  const signInError = useSelector(selectSignInError);
  const signUpError = useSelector(selectSignUpError);

  const history = useHistory();
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(checkSessionAsync());
    
    //toMongoDB();
    const handleUnmount = () => console.log("App unmounted"); 
    return handleUnmount; 
  },[]);


  useEffect(() => {
    if (signInError)
      {
        history.push("/signin");
      }  
  }, [signInError]);


  useEffect(() => {
    if(signUpError)
      {
        history.push("/signin");
      }
  },[signUpError]);
  

    return (
      <Container>
        <GlobalStyle />
        <LayoutWithLoadingSpinner isLoading={isSigningIn || isCheckingSession || isSigningUp}>
        <Header/>
        <Route path="/reviews"  component={ReviewsAndRatings} />
        <Switch>
          <Route path='/test' exact component={LoadingSpinner} />
          <Route path='/' exact component={Homepage} />
          <Route path="/shop/:match?"  component={Shoppage} />
          <Route exact path="/browse" render={props => <BrowsePageWithLoadingSpinner isLoading={isFetchingItems}/>} />
          <Route path="/browse/item/:type/:itemid/"  component={Itempage}/>

          <Route path="/signin" exact render = {
            () => (
              currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>)
              }  /> 
           <Route path="/checkout/:isBuyNow" exact component={CheckoutPage} />   
        </Switch>
       </LayoutWithLoadingSpinner>
      </Container>
  );
}


export default App;
