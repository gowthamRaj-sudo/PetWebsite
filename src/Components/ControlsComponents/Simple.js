import React, { Component }  from 'react'
import "..//..//Components/ControlsComponents/simple.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo from "..//..//Assets/Images/pet_logo.avif"

const Simple = () => {
    const [count, setCount] = React.useState(0);
    
    const components = [{
           Name:"Gowtham",
           para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
    Logo:Logo,
    
        },{
    Name:"vikkram",
           para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
           Logo:Logo,
    },
{
},{
    Name:"Arun Kumar",
           para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
           Logo:Logo,
  
},
{
    Name:"Gowtham",
    para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
    Logo:Logo,
},{
Name:"vikkram",
    para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
    Logo:Logo,
},
{
},{
Name:"Arun Kumar",
    para:"Seven presidents have been members of a political party before being elected. Six of these were active party members of the Indian National Congress.",
    Logo:Logo,

},

    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };


    const length = components.length;

    function nextSlide() {
        setCount( count === length - 1 ? 0 : count + 1 );
    }

    function prevSlide() {
        setCount( count === 0 ? length - 1 : count - 1 );
    }

  return (
    <>
    <div>
    

    
        {/* {
            render component from our components array
            components[count]
        } */}


      
        
           


    <Slider {...settings}>
    {components.map((slide ,index)=>{
return(
    <div>
            <h3>{slide.Name}</h3>
            <p>{slide.para}</p>
            {/* {index ===count && <img src={slide.Logo}/>} */}
            </div>
            )
            })}
            </Slider>

          
          {/* <div>
            <h3>Vikkram</h3>
            <p>Seven presidents have been members of a political party before being elected. 
                Six of these were active party members of the Indian National Congress.</p>
          </div>
          <div>
            <h3>Arun Kumar</h3>
            <p>Seven presidents have been members of a political party before being elected. 
                Six of these were active party members of the Indian National Congress.</p>
          </div>
          <div>
            <h3>Gowtham Raj</h3>
            <p>Seven presidents have been members of a political party before being elected. 
                Six of these were active party members of the Indian National Congress.</p>
          </div>
          <div>
            <h3>Vikkram</h3>
            <p>Seven presidents have been members of a political party before being elected. 
                Six of these were active party members of the Indian National Congress.</p>
          </div>
          <div>
            <h3>Arun Kumar</h3>
            <p>Seven presidents have been members of a political party before being elected. 
                Six of these were active party members of the Indian National Congress.</p>
          </div> */}
      
     


        
       <button onClick={prevSlide}>prev</button> 

        
         <button onClick={nextSlide}>next</button>
    </div>
    </>
  )
}

export default Simple
