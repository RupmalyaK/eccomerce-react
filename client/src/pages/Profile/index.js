import React, {useEffect} from "react"; 
import styled from "styled-components";
import RatingStar from "../../components/RatingStar";
import Reviews from "../../components/SellerProfileReviews";
import {useSelector,useDispatch} from "react-redux";
import {selectIsFetchingCurrentProfile,selectCurrentProfile} from "../../redux/browse/browse.selector.js";
import {useParams} from "react-router-dom";
import {fetchCurrentProfileAsync} from "../../redux/browse/browse.actions.js";
import LoadingSpinner from "../../components/LoadingSpinner"
import Profile from "../../components/Profile";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileWithSpinner = LoadingSpinner(Profile);
const Container = styled.div``;


const ProfilePage = props => {
    const isFetchingCurrentProfile = useSelector(selectIsFetchingCurrentProfile);
    const currentProfile = useSelector(selectCurrentProfile);
    const dispatch = useDispatch();
    const {sellerid} = useParams();
    useEffect(() => {
        if(!currentProfile && !isFetchingCurrentProfile)
            {
                dispatch(fetchCurrentProfileAsync(sellerid));
            }
    },[]);
    if(!currentProfile && !isFetchingCurrentProfile)
        {
            return(<></>);
        }
    return(
        <Container>
           <ProfileWithSpinner isLoading={isFetchingCurrentProfile} />
        </Container>
    );
}

export default ProfilePage;