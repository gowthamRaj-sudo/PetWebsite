import React, { useState } from 'react';
import "../NavBar/NavBar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ControlsComponents from '..//..//Components/ControlsComponents/dropDown_1';
import DropDownList_2 from '..//..//Components/ControlsComponents/DropDownList_2';
import DropDownList_3 from '../ControlsComponents/DropDownList_3';
import DropDownList_4 from '../ControlsComponents/DropDownList_4';
import DropDownList_6 from '../ControlsComponents/DropDownList_6';
import DropDownList_5 from '../ControlsComponents/DropDownList_5';
import OpenSideBar from "../ControlsComponents/SideBar";
const NavBar = () => {
  const [open, setOpen]=useState(false);
  const [DropDown, setDropDown]=useState({
    drop_1:false,
    drop_2:false,
    drop_3:false,
    drop_4:false,
    drop_5:false,
    drop_6:false,
  }

  );
  return (
    <>
  
    <div className='NavBar_container'>
      <div className='NavBarMenu'>
      <ul className='NavBarList'>
        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:true,
          drop_2:false,
          drop_3:false,
          drop_4:false,
          drop_5:false,
          drop_6:false,
        }

        )}onMouseLeave={()=>setDropDown(false)}>Pet Food</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_1 && <ControlsComponents/>}

        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:false,
          drop_2:true,
          drop_3:false,
          drop_4:false,
          drop_5:false,
          drop_6:false,
                })}onMouseLeave={()=>setDropDown(false)}>Pet Grooming</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_2 && <DropDownList_2/>}
        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:false,
          drop_2:false,
          drop_3:true,
          drop_4:false,
          drop_5:false,
          drop_6:false,
        })} onMouseLeave={()=>setDropDown(false)}>Accessories</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_3 && <DropDownList_3/>}
        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:false,
          drop_2:false,
          drop_3:false,
          drop_4:true,
          drop_5:false,
          drop_6:false,})}onMouseLeave={()=>setDropDown(false)}>Pet Toys</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_4 && <DropDownList_4 />}
        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:false,
          drop_2:false,
          drop_3:false,
          drop_4:false,
          drop_5:true,
          drop_6:false,})}onMouseLeave={()=>setDropDown(false)}>Treats</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_5 && <DropDownList_5/>}
        <li onMouseEnter={()=>setDropDown({
          ...DropDown,
          drop_1:false,
          drop_2:false,
          drop_3:false,
          drop_4:false,
          drop_5:false,
          drop_6:true,})}onMouseLeave={()=>setDropDown(false)}>Health</li><KeyboardArrowDownIcon sx={{width:"15px",marginTop:"10px"}}/>
        {DropDown.drop_6 &&<DropDownList_6/>}
      </ul>
      </div>
      <p className='NavBarOffers'>Clearance sale Upto 50% off </p>
      <span className='bugerIcon'><MenuIcon onClick={()=>setOpen(true)}/></span>
      
    </div>
    {open && <OpenSideBar Close={()=>setOpen(!open)}/>}
    
    </>
  )
}

export default NavBar