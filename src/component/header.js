import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown,NavLink} from 'react-bootstrap';
import  {BsFillGrid3X3GapFill,BsFillBellFill,BsQuestionCircleFill}  from "react-icons/bs";
import '../css/styles.css'

import Avatar from 'react-avatar';
//import Avatar from 'react-avatar';
function homepage(e) {
    e.preventDefault();
    window.location = '/';
}
class Header extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
<div>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                
            <div style={{display:'flex'}}>
                <Avatar name="F 1" size={40} style={{ margin:'0px 10px'}} round={true} onClick={homepage}/>
                <Navbar.Brand href="#home">Studioz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    
                    
                        <Nav.Link href="#features"><BsFillGrid3X3GapFill /></Nav.Link>
                        <Nav.Link href="#pricing"><BsFillBellFill/></Nav.Link>
                        <Nav.Link href="#deets"><BsQuestionCircleFill/></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        <Avatar size="35" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
           
            </div>
            
        );
    }

}
export default Header;