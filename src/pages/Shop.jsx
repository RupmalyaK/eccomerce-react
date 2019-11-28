import React, {useState , useEffect} from "react"; 
import styled from "styled-components"; 
import SHOP_DATA from "../data/shop-data";
import CollectionPreview from "../components/CollectionPreview.jsx";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux"; 
import CollectionOverview from "../components/CollectionOverview.jsx";
import CollectionPage from "./Collection.jsx";
import {Route} from "react-router-dom"; 

const Container = styled.div`
`;

const Shop = (props) => {
  
    const {match} = useParams();
    
   


return(
       <Container>
           <Route exact path={"/shop"} component={CollectionOverview} />
           <Route exact path={"/shop/:categoryid"} component={CollectionPage} />
       </Container>
    )
}



export default Shop; 


/** <Container>
            {!match ? 
            <CollectionOverview />
            : displayCompleteCollectionBySection()
        }
        </Container>        
); */

/*const displayCompleteCollectionBySection = () => {
   const temp = collection.filter((section) => {
        return (section.routeName.toUpperCase() === match.toUpperCase());
   })[0];
 
  return (
       temp ? <CollectionPreview section={temp}/> : null
   );
}*/