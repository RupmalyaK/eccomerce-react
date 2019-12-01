import React, {useState , useEffect} from "react"; 
import styled from "styled-components"; 
import SHOP_DATA from "../data/shop-data";
import CollectionPreview from "../components/CollectionPreview.jsx";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux"; 
import CollectionOverview from "../components/CollectionOverview.jsx";
import CollectionPage from "./Collection.jsx";
import {Route} from "react-router-dom"; 
import {firestore, convertCollectionsSnapshotToMap} from "../firebase/firebase.util.js";
import {updateCollections} from "../redux/shop/shop.actions.js";
import {useDispatch} from "react-redux";

const Container = styled.div`
`;

const Shop = (props) => {
  
    const {match} = useParams();  
    const dispatch = useDispatch();
 

  useEffect(() => {
    let unsubscribeFromCollectionsSnapshot = null; 
    const collectionsRef = firestore.collection("collections"); 
    unsubscribeFromCollectionsSnapshot = collectionsRef.onSnapshot(collectionsSnapshot => {
        const collectionsObj = convertCollectionsSnapshotToMap(collectionsSnapshot);
        dispatch(updateCollections(collectionsObj));
    });
    const handleUnmount = () => unsubscribeFromCollectionsSnapshot();
    return handleUnmount;
  },[])

return(
       <Container>
           <Route exact path={"/shop"} component={CollectionOverview} />
           <Route exact path={"/shop/:categoryid"} component={CollectionPage} />
       </Container>

    )
}



export default Shop; 

