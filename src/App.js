import React, {useState, useEffect} from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUp from "./pages/SignIn&SignUp.jsx";
import {auth, createUserProfileDoc} from "./firebase/firebase.util.js";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import {useDispatch} from "react-redux"; 
import setCurrentUser from "./redux/user/user.action.js";



const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
 const [currentUser] = useState(null); 

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
      return (
        () => {
          unsubscribeFromAuth(); 
        }
      );
    },[]); 
    
   
    return (
      <Container>
        <GlobalStyle />
        <Header/>
        <Pages>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/shop" exact component={Shoppage} />
          <Route path="/signin" exact component={SignInAndSignUp}  /> 
          
        </Switch>
        </Pages>
      </Container>
     
  );
}

export default App;
