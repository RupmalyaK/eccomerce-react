import React from "react"; 
import styled from "styled-components";
import {selectCurrentItem} from "../redux/browse/browse.selector.js"; 
import {useSelector} from "react-redux"; 

const Container = styled.div``;


const Product = props => {
    const item = useSelector(selectCurrentItem); 
    if(item === null)
        {
            return (<></>);
        }
    const {primaryImageUrl, /*secondaryImageUrls, */isFeatured, name, dateCreated:dateAdded, averageRating,Reviews,price } = item;    

    const secondaryImageUrls = [primaryImageUrl,primaryImageUrl,primaryImageUrl,primaryImageUrl,primaryImageUrl];


    const displayAllImages = () => {
        let secondaryImages = [primaryImageUrl];
        secondaryImages = secondaryImageUrls.map(secondaryImageUrl => {
            return(
                <img className= "secondary-img" src={secondaryImageUrl} alt="secondaryImage"/>
            );
        })
        return secondaryImages; 
    }    
    return(
        <Container> 
           <div className="images-container">
                <div className="images-collection">
                    {displayAllImages()}
                </div>
                <img className="primary-img" src={primaryImageUrl} alt="primary image" />
             </div> 
             <div className="primary-information">

    </div>

        </Container>
    );
}

export default Product; 