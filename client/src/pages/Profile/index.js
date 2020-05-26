import React from "react"; 
import styled from "styled-components";
import RatingStar, {} from "../../components/RatingStar";

const Container = styled.div`
margin-top:102px;
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
background:yellow;
height:100vh;
`;

const LeftPanel = styled.div`
min-width:550px;
height:100%;
background:olive;
display:flex;
flex-direction:column;
align-items:center;

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

const RightPanel = styled.div`
width:70%;
height:100%;
background:coral;
`;

const ProfilePic = styled.div`
width:350px;
height:350px;
border:1px solid black;
border-radius:100%;
background:orange;
margin-top:25px;

&:after{
    content:"Change profile pic";
    position:relative;
    display:block;
}
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



const ProfilePage = props => {
    return(
        <Container>
            <LeftPanel>
                <ProfilePic />
                <span className="name">Rupmalya Kumar</span>
                <span className="role">Buyer</span>
                <CustomRatingStar
                    rating={4}
                    starSize={"2rem"}
                    spacing={3}
                />
                <span className="reviews">Reviews</span>
                <ReviewsContainer>

                </ReviewsContainer>
            </LeftPanel>
            <RightPanel>
                
            </RightPanel>
        </Container>
    );
}

export default ProfilePage;