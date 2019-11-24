import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const config = {
    apiKey: "AIzaSyBFk_jDwECJPM1DFBixU3j5UjSrIqpwxSQ",
    authDomain: "react-rupkart-d6edf.firebaseapp.com",
    databaseURL: "https://react-rupkart-d6edf.firebaseio.com",
    projectId: "react-rupkart-d6edf",
    storageBucket: "react-rupkart-d6edf.appspot.com",
    messagingSenderId: "525657737940",
    appId: "1:525657737940:web:c2b12938ba1e8f693e4941",
    measurementId: "G-ZE257RT6JM"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
'login_hint': 'user@example.com'
});



const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

const createUserProfileDoc = async (userAuth , additionalDetails) => {
  if (!userAuth)
    {
      return; 
    }
    const userRef = firestore.doc("users/" + userAuth.uid);

    const snapshot = await userRef.get();

    if(!snapshot.exists)  
      {
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 
        try{
         const user =  await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalDetails
           }); 
        }
        catch(error)
          {
              console.log("Error creating user", error); 
          }
      }
      return userRef; 
}


export {auth};
export {firestore};
export {signInWithGoogle}; 
export {createUserProfileDoc};
export default firebase; 