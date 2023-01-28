import React from 'react'
import "..//ControlsComponents/ControlStyle.css"
import shopingGif from "..//..//Assets/Images/Pet_Accessories_ShopGif.webp"
const DropDownList_3 = () => {
  return (
    <>
    <div>
    <div className='dropBar_2'>

<div className='dropimage_1'>
  <img src={shopingGif} className="dropimg"/>
</div>
<div style={{paddingLeft:"10px"}}>
<h5>clippers</h5>
<ul className='dropBar_2List'>
<li>Pets Hair Grooming Trimmer</li>
<li>Cordless Electronic Clipper</li>
<li>Low Vibrant Clippers</li>
<li>Low Noise Pet Clippers</li>
<li>Pets Hair Grooming Trimmer</li>
</ul>
</div>
<div>
<h5>Shampoo</h5>
<ul className='dropBar_2List'>
<li>Anti Tick Puppy Shampoo</li>
<li>Natural Flea&Tick Shampoo</li>
<li>Tea Tree Shampoo For Dogs</li>
<li>Goat Milk Puppy Shampoo</li>
<li>Odar Neutralizing Shampoo</li>
</ul>
</div>
<div>
<h5>Brushes</h5>
<ul className='dropBar_2List'>
<li>Double Side Grooming Brush</li>
<li>Pinhead Short Coat Brush</li>
<li>Wide Tooth Plastic Comb</li>
<li>Long Coat Hair Rakes</li>
<li>Doble Side Grooming Brush</li>
</ul>
</div>
<div>
<h5>Nail cliper</h5>
<ul className='dropBar_2List'>
<li>Professinal Guillotine Clipper</li>
<li>Stainless Steel Scissor Clipper</li>
<li>Cardless Grinder Trimmers</li>
<li>Stainless steel Cat Nail Clipper</li>
<li>Powergrip Nail Clipper</li>
</ul>
</div>



</div>

    </div>
    </>
  )
}

export default DropDownList_3