import React, {useEffect} from "react"; 
import styled from "styled-components"; 
import {useParams} from "react-router-dom";
import {Route} from "react-router-dom"; 
import {fetchCollectionsStartAsync} from "../redux/shop/shop.actions.js";
import {useDispatch, useSelector} from "react-redux";
import {selectIsFetching} from "../redux/shop/shop.selector.js"
import LoadingSpinner from "../components/LoadingSpinner";
import CollectionOverview from "../components/CollectionsOverview";
import CollectionPage from "./Collection";

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
      dispatch(fetchCollectionsStartAsync());
    }, []);
    


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

