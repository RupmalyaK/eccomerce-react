import React from "react"; 
import { useQuery } from "react-apollo";
import Collection from "./collection.component.jsx"; 
import Spinner from "../../components/spinner/spinner.component.jsx";
import {gql} from "apollo-boost";
import { fromPromise } from "apollo-link";

const GET_COLLECTION_BY_TITLE = gql`

    query getCollectionsByTitle($title: String!)
        {
            getCollectionsByTitle(title:$title)
                {
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

const CollectionContainer = (props) => {
    const {match} = props; 
    const {loading , data, error} = useQuery(GET_COLLECTION_BY_TITLE, {
        variables: {
            title:match.params.collectionId,
        },
    });

    if (loading)
        {
            return (<Spinner />);
        }
    
    return (<Collection collection = {data.getCollectionsByTitle} />);    
}

export default CollectionContainer;