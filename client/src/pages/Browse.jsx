import React, {useEffect} from "react"; 
import {useSelector, useDispatch} from "react-redux"; 
import {fetchItemsAsync} from "../redux/browse/browse.actions.js";
import {selectItems} from "../redux/browse/browse.selector.js";
import styled from "styled-components";
import {Row,Col} from "react-bootstrap"
import axios from "axios"; 

const Container = styled.div``;

const BrowseItem = props => {
 
    const {name, price, isFeatured, primaryImageUrl, type, _id} = props.item;  
    return (
            <Col key={_id} lg={12}>
                <span>name: {name}</span>
                price: {price}
                isFeatured:{isFeatured}
                primaryImageUrl:{primaryImageUrl}
                type:{type}
            </Col>
            );
}

const Browse = props => {
    const {searchString} = props; 
    const items = useSelector(selectItems);
    
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchItemsAsync({searchString}));
    }, [searchString]); 

    const displayBrowseItems = () => {
        const browseItemsArr = items.map(item => {
            return (<BrowseItem key={item._id} item={item} />);
        }); 
        return browseItemsArr;
        }

    return (
        <Container>
             <Row>
                {displayBrowseItems()}
             </Row>                    
        </Container>        
    );
}

export default Browse;