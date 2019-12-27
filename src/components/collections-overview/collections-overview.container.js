import React from "react"; 
import {gql} from "apollo-boost";
import CollectionOverview from "./collections-overview.component.jsx";
import { useQuery } from '@apollo/react-hooks';
import Spinner from "../spinner/spinner.component.jsx"; 

const GET_COLLECTIONS = gql`
{
    collections{
        id
        title
        items{
            id
            name
            price
            imageUrl
        }
    }
}
`;

const CollectionOverviewContainer = () => {
    const {loading,error,data} = useQuery(GET_COLLECTIONS, {});

     if (loading)
        {
            return (<Spinner/>);
        }
        return (<CollectionOverview collections={data.collections}/>);
}

export default CollectionOverviewContainer; 
