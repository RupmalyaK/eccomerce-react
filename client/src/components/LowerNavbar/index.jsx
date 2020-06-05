import React from "react"; 
import {NavLink, Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../images/crown.svg";
import {useSelector , useDispatch} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {signOutAsync} from "../../redux/user/user.action.js";
import {selectIsPageYtop} from "../../redux/system/system.selector.js"
import {Navbar, Nav,Row,Col} from "react-bootstrap";
import SearchBar from "../SearchBar";
import CartIcon from "../CartIcon";
import {Container} from "./style.jsx";
import profileIconSvg from  "../../images/profile-icon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

import ProfileIcon from "../ProfileIcon";
const {Link:BLink} = Nav;







const UpperNavbar = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const isPageYTop = useSelector(selectIsPageYtop);
    const dispatch = useDispatch(); 
    
    const handleSignOut = (e) => {
       dispatch(signOutAsync());
    }
    return (
        <Container isPageYTop={isPageYTop} >
        <Navbar expand="sm" variant="light" className="navBar"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav px-0 text-center w-100">
                  <Nav className="ml-auto text-uppercase w-100 justify-content-start text-center">       
                          <BLink as={NavLink} to='/' activeClassName="active" className="link"  exact>
                              <span>Home</span>
                          </BLink>
                          <BLink as={NavLink} to="/Browse" className="link" exact>
                            <span>Browse</span><FontAwesomeIcon icon={faCaretRight} className="icon"/>
                         </BLink>
                         <BLink as={NavLink} to="/Browse" className="link" exact>
                            <span>Collections</span><FontAwesomeIcon icon={faCaretRight} className="icon"/>
                         </BLink>
                    </Nav>
                    <Nav className="ml-auto text-uppercase w-100 justify-content-end text-center">
                        <BLink as={NavLink} to="/contactus" activeClassName="active" className="link"  exact>
                                <span>Contact</span>
                        </BLink>
                    </Nav>
                 
          </Navbar.Collapse> 
          </Navbar>     
  </Container>
    )
}



export default UpperNavbar; 



/**
 * <Container isPageYTop={isPageYTop} >
              <Navbar expand="sm" variant="light" className="navBar"> 
              <CustomBContainer fluid>
              <Navbar.Brand  as={Link} to='/' style={{flex:1}}><Logo /></Navbar.Brand> 
               <CartIcon className= "d-sm-none"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav px-0 text-center w-100">
                <SearchBar className="d-none w-50 d-lg-inline-flex justify-content-end" style={{flex:1}}/>
                        <Nav className="ml-auto text-uppercase w-100 justify-content-end text-center" style={{flex:1}}>       
                                <BLink as={NavLink} to='/' activeClassName="active" className="link" exact>Homepage</BLink>
                                <BLink as={NavLink} to="/Browse" className="link" exact>Browse</BLink>
                                <BLink as={NavLink} to="/contactus" className="link" exact>Contact us</BLink>
                                {currentUser?
                                    <></> :
                                    <BLink  as={NavLink} to="/signin" className="link">Sign in</BLink>
                                }
                        </Nav>
                       
                </Navbar.Collapse> 
               <CartIcon className= "d-none d-sm-flex ml-3" styled={{flex:1}}/> 
                {currentUser ? <ProfileIcon src={profileIconSvg} alt={"profile icon"}/> : <></>}
                </CustomBContainer>
                </Navbar>     
        </Container>
 */
     
    



 