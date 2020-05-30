import React from "react"; 
import styled from "styled-components";
import RatingStar from "../../components/RatingStar";
import ReviewsAndRatings from "../../components/ReviewsAndRatings";
import {useSelector} from "react-redux";
import {selectCurrentProfile,selectIsPostingReview} from "../../redux/browse/browse.selector.js";
import {postSellerReviewAsync} from "../../redux/browse/browse.actions.js";
import LoadingSpinner from "../LoadingSpinner";

const ReviewsAndRatingsWithLoadingSpinner = LoadingSpinner(ReviewsAndRatings);



const Container = styled.div`
margin-top:85px;
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
background:yellow;
height:100vh;
`;

const LeftPanel = styled.div`
min-width:570px;
height:100%;
background:olive;
display:flex;
flex-direction:column;
align-items:center;
max-height:60vh;
.name{
    font-size:2rem;
}

.role{
    font-size:1.2rem;
    margin-bottom:25px;
}

.reviews{
    font-size:2rem;
    margin-top:25px;
}
`;


const ProfilePic = styled.div`
width:350px;
height:350px;
border:0px solid black;
border-radius:100%;
background:orange;
margin-top:25px;
`;

const CustomRatingStar = styled(RatingStar)`

`;

const ReviewsContainer = styled.div`
    display:flex;
    margin-top:5px;
    width:90%;
    height:250px;
    background:blue;
`;

const RightPanel = styled.div`
width:70%;
height:100%;
background:coral;
display:flex;
flex-direction:column;
`;

const ProfileNavBar = styled.div`
   position:relative;
   background:grey;
   width:25%;
   height:70px;
   align-self:center;
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   span{
       font-size:2rem;
       cursor:pointer;
   }
`;


const Profile = props => {
    const profile = useSelector(selectCurrentProfile);
    const {displayName,role,reviewsData} = profile;
    const {reviews,averageRating} = reviewsData;


    return(
        <Container>
           
            <LeftPanel>
                <ProfilePic />
                <span className="name">{displayName}</span>
                <span className="role">{role}</span>
                <CustomRatingStar
                    rating={4}
                    starSize={"2rem"}
                    spacing={"3"}
                />
            </LeftPanel>
            <RightPanel>
                <ProfileNavBar>
                        <span>Selling</span>
                        <span>Reviews</span>
                 </ProfileNavBar>  
                  <ReviewsAndRatings reviews={reviews} averageRating={averageRating}  postReviewAsync={true} />
            </RightPanel>
        </Container>
    );
}

export default Profile;