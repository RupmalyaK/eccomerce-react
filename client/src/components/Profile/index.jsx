import React, {useState, useEffect} from "react"; 
import styled from "styled-components";
import RatingStar from "../RatingStar";
import ReviewsAndRatings from "../ReviewsAndRatings";
import {useSelector,useDispatch} from "react-redux";
import {selectCurrentProfile,selectIsPostingReview,selectIsFetching} from "../../redux/browse/browse.selector.js";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {postSellerReviewAsync} from "../../redux/browse/browse.actions.js";
import {fetchItemsAsync} from "../../redux/browse/browse.actions.js";
import LoadingSpinner from "../LoadingSpinner";
import Button from "../CustomButton";
import Browse from "../Browse";


const ReviewsAndRatingsWithLoadingSpinner = LoadingSpinner(ReviewsAndRatings);
const BrowseWithLoadingSpinner = LoadingSpinner(Browse);



const Container = styled.div`
margin-top:85px;
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
background:yellow;
height:auto;
`;

const LeftPanel = styled.div`
width:570px;
min-width:570px;
height:100vh;
background:olive;
display:flex;
flex-direction:column;
align-items:center;
.profile-info{
    display:flex;
    flex:3;
    flex-direction:column;
    align-items:center;
    .name{
        font-size:2rem;
    }
    .role{
        font-size:1.2rem;
        margin-bottom:25px; 
    }
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
min-height:100%;
background:coral;
display:flex;
flex-direction:column;
`;


const ProfileNavBar = styled.div`
   position:relative;
   background:grey;
   flex:1;
   width:100%;
   height:70px;
   align-self:center;
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   span{
       font-size:1.2rem;
       cursor:pointer;
   }
`;

const CustomButton = styled(Button)``;

const Profile = props => {
    const [storeOrReviews , setStoreOrReviews] = useState("store");
    const profile = useSelector(selectCurrentProfile);
    const currentUser = useSelector(selectCurrentUser);
    const {displayName,role,reviewsData,id:sellerId} = profile;
    const isFetchingItems = useSelector(selectIsFetching);
    const {reviews,averageRating} = reviewsData;
    const dispatch = useDispatch();


    useEffect(() => {
   
        dispatch(fetchItemsAsync({sellerId}));
        const handleUnmount = () => {
            dispatch(fetchItemsAsync({searchString:"", sortBy:"relevance", isAsc:true}));
        }
        return handleUnmount;
    },[])
    
    const handleReviewSend = (text,currentRating) => {
        dispatch(postSellerReviewAsync(text,currentRating,sellerId,currentUser.id));
    }

    const handlerChangeSection = (e) => {
      //  e.preventDefault();
        setStoreOrReviews(storeOrReviews === "store" ? "reviews" : "store");
    }

    return(
        <Container>
           
            <LeftPanel>
                <ProfilePic />
                <div className="profile-info">
                    <span className="name">{displayName}</span>
                    <span className="role">{role}</span>
                    <CustomRatingStar
                    rating={4}
                    starSize={"2rem"}
                    spacing={"3"}
                />
                </div>
                
                 <ProfileNavBar>
                    <CustomButton onClick={handlerChangeSection}>See {profile.displayName}'s { storeOrReviews === "store" ? "reviews" : "store"}</CustomButton>
                 </ProfileNavBar>  
                 
            </LeftPanel>
            <RightPanel>
                 {storeOrReviews === "reviews" ?  (<ReviewsAndRatings onSubmit={handleReviewSend} reviews={[...reviews]} averageRating={averageRating} />) : ( <BrowseWithLoadingSpinner isLoading={isFetchingItems} />)}
            </RightPanel>
        </Container>
    );
}

export default Profile;