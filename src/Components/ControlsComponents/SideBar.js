import { Link } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "..//ControlsComponents/ControlStyle.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SideBar = ({Close}) => {
    
    return (
        <>
        <div className='SideBarMenu'>
            <h3 className='menus'>MENUS</h3>
            <CloseIcon sx={{position:"absolute",right:"45px",top:"35px",background:"whiteSmoke",padding:"5px"}}onClick={Close}/>
            <ul  className='sideMenu'>
                <li>Pet Food</li>
                <li>Pet Grooming </li>
                <li>Accessories</li>
                <li>Pet Toys</li>
                <li>Treats</li>
                <li>Health</li>
            </ul>
        </div>
        
            
        </>
    )
}

export default SideBar
