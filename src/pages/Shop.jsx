import React, {useState , useEffect} from "react"; 
import styled from "styled-components"; 
import SHOP_DATA from "../data/shop-data";
import CollectionPreview from "../components/CollectionPreview.jsx";
import {useParams} from "react-router-dom";
import CollectionOverview from "../components/CollectionOverview.jsx";
import CollectionPage from "./Collection.jsx";
import {Route} from "react-router-dom"; 
import {firestore, convertCollectionsSnapshotToMap} from "../firebase/firebase.util.js";
import {fetchCollectionStartAsync} from "../redux/shop/shop.actions.js";
import {useDispatch, useSelector} from "react-redux";
import {selectIsFetching} from "../redux/shop/shop.selector.js"
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

const Container = styled.div`
width:100vw;
height:100vh;
max-width:100%;
max-height:100%;
`;


const Shop = (props) => {
  
    const {match} = useParams();  
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);

    useEffect(() => {
      dispatch(fetchCollectionStartAsync());
    },[])

return(
       <Container>
            <Route exact path={"/shop"} render={(props) => {
              return (
                <CollectionOverviewWithSpinner isLoading = {isFetching} />
              );
            }} />

            <Route exact path={"/shop/:categoryid"} render = {(props) => {
                return (<CollectionPageWithSpinner isLoading={isFetching} /> )
            }} />
       </Container>

    )
}



export default Shop; 

