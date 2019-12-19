import React, {useState} from "react"; 
import styled from "styled-components";
import {useSelector} from "react-redux"; 

const Container = styled.div`
height:90vh;
width:100%;
`;


const Slider = (props) => {

    const {currentSlide, setCurrentSlide} = useState([]);
    const getItems = () => {

    }
   
    return(
    <Container>

    </Container>
    );
}



export default Slider; 