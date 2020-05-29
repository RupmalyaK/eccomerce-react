import React from "react";
import styled from "styled-components";
import SignUp from "../../components/SignUp";

const Container = styled.div`
display:flex;
justify-content:center;
padding-top:102px;
`;

const SignUpPage = props => {
    return (
        <Container>
            <SignUp/>
        </Container>
    );
}

export default SignUpPage;