import { Button } from '@mui/material'
// import React from 'react'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Buttons = ({name,background}) => {
  return (
   <>
     <Button sx={{background:background,color:"white"}}>{name}</Button> 
    </>
  
    
    // function SampleNextArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{ ...style, display: "block", background: "red" }}
    //       onClick={onClick}
    //     />
    //   );
    // }
    
    // function SamplePrevArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{ ...style, display: "block", background: "green" }}
    //       onClick={onClick}
    //     />
    //   );
    // }
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 4,
      
      
    // };
    
    // 
    //  
        
        
    //       <div>
    //         <SamplePrevArrow />
            
    //         <h2>Custom Arrows</h2>
    //         <SampleNextArrow />
    //         <Slider {...settings}>
    //           <div>
    //             <h3>1</h3>
    //           </div>
    //           <div>
    //             <h3>2</h3>
    //           </div>
    //           <div>
    //             <h3>3</h3>
    //           </div>
    //           <div>
    //             <h3>4</h3>
    //           </div>
    //           <div>
    //             <h3>5</h3>
    //           </div>
    //           <div>
    //             <h3>6</h3>
    //           </div>
    //         </Slider>
            
    //       </div>
      ); }
    

export default Buttons
