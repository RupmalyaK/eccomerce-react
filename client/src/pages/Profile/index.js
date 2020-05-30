import React from "react"; 
import styled from "styled-components";
import RatingStar from "../../components/RatingStar";
import Reviews from "../../components/SellerProfileReviews";
import {useSelector} from "react-redux";
import {selectIsFetchingCurrentProfile} from "../../redux/browse/browse.selector.js";
import LoadingSpinner from "../../components/LoadingSpinner"
import Profile from "../../components/Profile";

const ProfileWithSpinner = LoadingSpinner(Profile);
const Container = styled.div``;


const ProfilePage = props => {
    const isFetchingCurrentProfile = useSelector(selectIsFetchingCurrentProfile);
    return(
        <Container>
           <ProfileWithSpinner isLoading={isFetchingCurrentProfile} />
        </Container>
    );
}

export default ProfilePage;