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

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

export const provider = new firebase.auth.GoogleAuthProvider();




export const signInWithGoogle = (e) => { 
    e.preventDefault();
    auth.signInWithPopup(provider);
}

export const createUserProfileDoc = async (userAuth , additionalDetails) => {
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

export const addCollectionandDocuments = async (collectionKey , objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey); 
  const batch = firestore.batch();
    objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc() ;
    batch.set(newDocRef, obj);
  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) =>
  {
    const {docs} = collectionsSnapshot; 
    const collectionsArr = docs.map(collectionSnapshot => {
        const {title , items} = collectionSnapshot.data();
        const newObj = {title , items, routeName:encodeURI(title) , id:collectionSnapshot.id};
        return newObj;
    })
    
    let collectionsObj = {}; 
    collectionsArr.forEach(collection =>{
          collectionsObj[collection.title.toLowerCase()] = collection;
      });

      return collectionsObj;
  }


export default firebase; 