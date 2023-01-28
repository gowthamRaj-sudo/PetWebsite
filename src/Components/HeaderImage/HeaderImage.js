import React from 'react'
import "../HeaderImage/HeaderImage.css"
import Logo from "..//..//Assets/Images/pet_logo.avif"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { alpha, Button, InputBase } from '@mui/material';
// import Btn from "../ControlsComponents/Buttons"
const HeaderImage = () => {
 
  return (
    <>
    <div className='HeaderImageMain'>
    <div className='HeaderImage'>
      <img src={Logo} className="logoImage"/>
      <ul className='HeaderImageList'>
        <li className='inputBase'>
            
            
           <InputBase sx={{border:"1px solid black",width:"400px",borderRadius:"15px",height:"50px",paddingLeft:"10px"}}
           placeholder='Search...'/><SearchIcon sx={{position:"relative",right:"40px",top:"9px"}}/>
          </li>
        <li className='inputBase'>Sign In</li>
        <li className='inputBase'>Sign Up</li>
        <li style={{position:"relative"}} className="cartIcons"><ShoppingCartIcon sx={{position:"absolute",right:"50px"}}/>My Cart</li>
      </ul>
    </div>
    <div className='HeaderImageQuality'>
<p>Best Quality</p>
<h1>Nutrition Food </h1>

    </div>
    {/* <Btn name={"Shop Now"}background={"black"}/> */}
    </div>
    </>
  )
}

export default HeaderImage