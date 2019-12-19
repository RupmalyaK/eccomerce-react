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
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem , Container as BContainer} from "react-bootstrap";



  
console.log(NavItem , ":::Debug")

const Container = styled.div``;

const XContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
@media screen and (max-width:800px)
{
    height:60px;
    padding:10px;
    margin-bottom:20px;
}
`;




const CustomNavbar = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 

    const handleSignOut = (e) => {
       dispatch(signOutAsync());
    }

    return (
        <Container>
              <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home" as={Link} to='/'><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                
               
                    <Nav className="ml-auto text-uppercase w-100 justify-content-end">
                        <Form inline className="d-inline w-50 d-inline-flex justify-content-center">
                            <FormControl type="text" placeholder="Search product..." className="mr-sm-2 m-0 w-50" />
                            <Button variant="outline-success">Search</Button>
                        </Form>  
                        <NavDropdown title="All products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>   
                        <Nav.Link as={Link} to='/'>Homepage</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
                        {currentUser?
                            <Nav.Link onClick = {handleSignOut} to={"/"}>Sign out</Nav.Link> :
                            <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
                        }
                     
                        </Nav>
                        <CartIcon />   
                    
                </Navbar.Collapse>
                </Navbar> 
            
        </Container>
    )
}

export default CustomNavbar; 

     
    



 