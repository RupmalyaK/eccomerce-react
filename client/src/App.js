import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import {getFirebaseUserById} from "./firebase/firebase.util.js";
import {useSelector , useDispatch} from "react-redux"; 
import {Route , Switch , Redirect, useParams} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Home.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUpPage from "./pages/SignIn&SignUp.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import {useHistory} from "react-router-dom";
import {selectCurrentUser,selectUnsubscriber} from "./redux/user/user.selector.js";
import {checkSessionAsync} from "./redux/user/user.action.js";
import {selectIsSigningIn, selectIsCheckingSession, selectSignInError, selectSignUpError, selectIsSigningUp} from "./redux/user/user.selector.js";
import Layout from "./components/Layout.jsx"; 
import {addCollectionandDocuments} from "./firebase/firebase.util.js";
import {fetchFeaturedItemsAsync, fetchAutocompleteAsync} from "./redux/shop/shop.actions.js";
import {toMongoDB} from "./util.js";
import BrowsePage from "./pages/Browse.jsx";
import Itempage from "./pages/Item.jsx";
import {selectIsFetching} from "./redux/browse/browse.selector.js";
import ReviewsAndRatings from "./components/ReviewsAndRatings";




const LayoutWithLoadingSpinner = LoadingSpinner(Layout);
const ItemPageWithLoadingSpinner = LoadingSpinner(Itempage);


const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
  const isCheckingSession = useSelector(selectIsCheckingSession);
  const isFetchingItems = useSelector(selectIsFetching);
  const currentUser = useSelector(selectCurrentUser);
  const unsubscriber = useSelector(selectUnsubscriber);
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
          <Route exact path="/browse" render={props => <BrowsePage />} />
          <Route path="/browse/item/:itemid/:type"  component={Itempage}/>

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
