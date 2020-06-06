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
import {faBell,faHeart,faUser,faShoppingCart} from "@fortawesome/free-solid-svg-icons";

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
        <Container>  
              <Navbar expand="sm" variant="dark" className="navBar flex-column flex-sm-row p-0"> 
                    <Navbar.Brand  as={Link} to='/' style={{flex:1}} className="mb-3 mb-sm-0"><Logo /></Navbar.Brand> 
                    <SearchBar className="w-100  justify-content-center "/>
                    <Nav className="text-uppercase w-100 justify-content-center justify-content-sm-end flex-row text-center pt-5 pt-sm-0 mb-2 mb-sm-0" style={{flex:1}}>       
                            <ProfileIcon />
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faHeart} className="icon"/>
                            </div>
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faBell} className="icon"/>
                            </div>
                            <CartIcon />
                    </Nav>                     
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
     
    
/**<Row>
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <SearchBar className="d-none w-50 d-lg-inline-flex justify-content-end" style={{flex:1}}/>
                </Col>
                <Col>
                    <Row className="right-menu">
                        <Col>
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        </Col>

                        <Col>
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faBell}/>
                        </div>
                        </Col>

                        <Col>
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        </Col>
                        <Col>
                            <div className="shoppingCartBox">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span>0 item(s)-0.0</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row> */


 