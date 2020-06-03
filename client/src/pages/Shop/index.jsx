import React, {useEffect} from "react"; 
import {useParams} from "react-router-dom";
import {Route} from "react-router-dom"; 
import {useDispatch, useSelector} from "react-redux";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions.js";
import {selectIsFetching} from "../../redux/shop/shop.selector.js"
import LoadingSpinner from "../../components/LoadingSpinner";
import CollectionOverview from "../../components/CollectionsOverview";
import CollectionPage from "./../Collection";
import {Container} from "./style.jsx";

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);




const Shop = (props) => {
  
    const {match} = useParams();  
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    useEffect(() => {
      dispatch(fetchCollectionsStartAsync());
    }, []);
    


return(
       <Container>
            <Route exact path={"/shop"}>
                <CollectionOverviewWithSpinner isLoading = {isFetching} />
            </Route>  
            <Route exact path={"/shop/:categoryid"} >
                <CollectionPageWithSpinner isLoading={isFetching} />
            </Route>
       </Container>

    )
}



export default Shop; 

