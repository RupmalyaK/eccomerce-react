import admin from "firebase-admin"; 

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://react-rupkart-d6edf.firebaseio.com'
  });

  export default admin; 