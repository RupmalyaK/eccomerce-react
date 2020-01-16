import React, {useState} from "react"; 
import styled from "styled-components"; 
import {NavLink, Link} from "react-router-dom";
import {auth} from "../firebase/firebase.util.js";
import {ReactComponent as Logo} from "../images/crown.svg";
import {signInWithGoogle} from "../firebase/firebase.util.js";
import {useSelector , useDispatch} from "react-redux";
import {selectCurrentUser} from "../redux/user/user.selector.js";
import CartIcon from "./CartIcon.jsx";
import {signOutAsync} from "../redux/user/user.action.js";
import {Navbar, Nav, NavItem , Container as BContainer} from "react-bootstrap";
import SearchBar from "./SearchBar.jsx";
import AllProductsDropdown from "./AllProductsDropdown.jsx";
const {Link:BLink} = Nav;




const Container = styled.div`

.active{
    border-bottom: 1px inset black;
};`;

const CustomBContainer = styled(BContainer)`
max-width:1450px;
`;


const CustomNavbar = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 
    const handleSignOut = (e) => {
       dispatch(signOutAsync());
    }
    return (
        <Container>
              <Navbar expand="sm" variant="light" className="navBar"> 
              <CustomBContainer fluid>
              <Navbar.Brand  as={Link} to='/' style={{flex:1}}><Logo /></Navbar.Brand> 
               <CartIcon className= "d-sm-none"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav px-0 text-center w-100">
                <SearchBar className="d-none w-50 d-lg-inline-flex justify-content-end" style={{flex:1}}/>
                        <Nav className="ml-auto text-uppercase w-100 justify-content-end text-center" style={{flex:1}}>       
                                <BLink as={NavLink} to='/' activeClassName="active" exact>Homepage</BLink>
                                <BLink as={NavLink} to="/Browse" exact>Browse</BLink>
                                <BLink as={NavLink} to="/contactus" exact>Contact us</BLink>
                                {currentUser?
                                    <BLink  onClick = {handleSignOut} to={"/"}>Sign out</BLink> :
                                    <BLink  as={NavLink} to="/signin">Sign in</BLink>
                                }
                        </Nav>
                       
                </Navbar.Collapse> 
               <CartIcon className= "d-none d-sm-flex ml-3" styled={{flex:1}}/> 
                </CustomBContainer>
                </Navbar>     
        </Container>
    )
}



export default CustomNavbar; 

     
    



 