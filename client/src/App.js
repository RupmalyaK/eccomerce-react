import React, {useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux"; 
import {Route , Switch , Redirect} from "react-router-dom"; 
import {useHistory} from "react-router-dom";
import {selectCurrentUser} from "./redux/user/user.selector.js";
import {checkSessionAsync} from "./redux/user/user.action.js";
import {selectIsSigningIn, selectIsCheckingSession, selectSignInError, selectSignUpError, selectIsSigningUp} from "./redux/user/user.selector.js";
import {selectIsFetching as selectIsFetchingItems} from "./redux/browse/browse.selector.js";
import Layout from "./components/Layout"; 
import Itempage from "./pages/Item";
import ReviewsAndRatings from "./components/ReviewsAndRatings";
import CheckoutPage from "./pages/Checkout";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Homepage from "./pages/Home"; 
import Shoppage from "./pages/Shop";
import BrowsePage from "./pages/Browse";
import ProfilePage from "./pages/Profile";
import {GlobalStyle,theme} from "./components/GlobalStyle";
import SignInPage from "./pages/Signin";
import {ThemeProvider} from "styled-components";
import SignUpPage from "./pages/Signup";
import { faPray } from '@fortawesome/free-solid-svg-icons';
//import {toMongoDB} from "./util.js";



const LayoutWithLoadingSpinner = LoadingSpinner(Layout);
const BrowsePageWithLoadingSpinner = LoadingSpinner(BrowsePage);



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
      <div>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LayoutWithLoadingSpinner isLoading={isSigningIn || isCheckingSession || isSigningUp}>
                
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path="/shop/:match?"  component={Shoppage}/>
                    <Route exact path="/browse">
                        <BrowsePageWithLoadingSpinner isLoading={isFetchingItems}/>
                    </Route> 
                    <Route path="/browse/item/:type/:itemid/"  component={Itempage}/>

                    <Route path="/signin" exact render = {
                      () => (
                        currentUser ? <Redirect to='/'/> : <SignInPage/>)
                        }  /> 

                    <Route path="/signup" exact render = {
                      () => (
                        currentUser ? <Redirect to='/'/> : <SignUpPage/>)
                        }  /> 

                    <Route path='/profile/:sellerid?' exact component={ProfilePage} /> 
                    <Route path="/checkout/:isBuyNow" exact component={CheckoutPage} />   
                </Switch>
          </LayoutWithLoadingSpinner>
       </ThemeProvider>
      </div>
  );
}


export default App;
