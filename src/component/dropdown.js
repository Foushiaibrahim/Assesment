import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown,NavLink} from 'react-bootstrap';
import  {BsFillGrid3X3GapFill,BsFillBellFill,BsQuestionCircleFill}  from "react-icons/bs";
import '../css/styles.css'
import {   DropdownButton,ProgressBar,Button,ButtonGroup,Dropdown} from 'react-bootstrap';
import Avatar from 'react-avatar';
//import Avatar from 'react-avatar';

class DropDownButton extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:'2%'}}>
        <div className='dropdowntitle'>{this.props.title} <BsQuestionCircleFill color="gray"/></div><div>
        <Dropdown as={ButtonGroup} style={{border:'1px soild gray !important'}}>
  <Button variant="default">{this.props.Dtitle}</Button>

  <Dropdown.Toggle split variant="default" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"> {this.props.list}</Dropdown.Item>
    <Dropdown.Item href="#/action-1"> {this.props.list1}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></div>
        </div> 
           
        );
    }

}
export default DropDownButton;