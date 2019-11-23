import React, {useState, useEffect} from 'react';
import {Route , Switch} from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx"; 
import Shoppage from "./pages/Shop.jsx";
import SignInAndSignUp from "./pages/SignIn&SignUp.jsx";
import {auth, createUserProfileDoc} from "./firebase/firebase.util.js";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";


const Container = styled.div`
`;

const Pages = styled.div`
padding: 20px 20px; 
`;

const App = () => {
  const [currentUser , setCurrentUser] = useState(null); 
 
  useEffect(
    () => {
      let unsubscribeFromAuth = null;
      unsubscribeFromAuth = auth.onAuthStateChanged(
        async userAuth => {
        if(userAuth)
          {
            const userRef = await createUserProfileDoc(userAuth); 

            userRef.onSnapshot(snapshot => {
                setCurrentUser({
                  id:snapshot.id,
                  ...snapshot.data()
                });    
            });
            return;
          }
          setCurrentUser(userAuth); 
        }
      ); 
      console.log(currentUser);
      return (
        () => {
          unsubscribeFromAuth(); 
        }
      );
    },[]);
    
    useEffect(() => {
      console.log(currentUser); 
    },[currentUser])
   
    return (
      <Container>
        <GlobalStyle />
        <Header currentUser = {currentUser} />
        <Pages>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/shop" exact component={Shoppage} />
          {!currentUser? <Route path="/signin" exact component={SignInAndSignUp} currentUser={currentUser} /> : <></>}
          
        </Switch>
        </Pages>
      </Container>
     
  );
}

export default App;
