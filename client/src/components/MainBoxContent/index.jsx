import React from "react"; 
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
background:yellow;
background-image:url(${props => process.env.PUBLIC_URL + "/images/" + props.img });
background-color:${props => props.theme.secondaryBackgroundColor};
width:100%;
height:80%;
background-size:contain;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:30px 0px 0px 20px;
font-size:1rem;
color:${props => props.theme.boxTextColor};

.items-type{
display:inline;
align-items:center;
padding:5px;
margin-top:20px;
cursor:pointer;
.text{
  margin-left:20px;
}
&:hover{
    color:${props => props.theme.secondaryTextColor};
}
}
`;

const MainBoxContent = (props) => {
    const {names,img,...extraProps} = props; 
    

    const displayAllItems = () => {
        const allItems = names.map(name => {
            return(
            <div className="items-type">
                <FontAwesomeIcon icon={faCheck} className="content-icon" />
                <span className="text">{name}</span>
            </div>
            );
        });
        return allItems; 
    }
    return (
    <Container img={img} {...extraProps} >
           {displayAllItems()}
     </Container>
    ); 
}


export default MainBoxContent; 