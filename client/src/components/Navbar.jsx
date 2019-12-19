import React, {useState} from "react"; 
import styled from "styled-components"; 
import {Link} from "react-router-dom";
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



  
console.log(NavItem , ":::Debug")

const Container = styled.div``;

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
            
              <Navbar bg="light" expand="xl" fixed="top">
              <CustomBContainer fluid>
                <Navbar.Brand  as={Link} to='/'><Logo /></Navbar.Brand> 
                <CartIcon className= "d-xl-none"/>  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <SearchBar className="d-none w-50 d-xl-inline-flex justify-content-center"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-uppercase w-100 justify-content-xl-end justify-content-lg-center text-xm-center">
                        
                        <AllProductsDropdown/>
                        <Nav.Link  as={Link} to='/'>Homepage</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link  as={Link} to="/contactus">Contact us</Nav.Link>
                        {currentUser?
                            <Nav.Link  onClick = {handleSignOut} to={"/"}>Sign out</Nav.Link> :
                            <Nav.Link  as={Link} to="/signin">Sign in</Nav.Link>
                        }
                        </Nav>
                </Navbar.Collapse> 
                <CartIcon className= "d-none d-xl-flex ml-xl-3"/>  
                </CustomBContainer>
                </Navbar> 
                
        </Container>
    )
}

export default CustomNavbar; 

     
    



 