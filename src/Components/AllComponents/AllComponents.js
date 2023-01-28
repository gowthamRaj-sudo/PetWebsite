import React from 'react';
import NavBar from "../NavBar/NavBar";
import HeaderImage from "../HeaderImage/HeaderImage";
import PetsFood from "../PetFood/PetFood";
import Offers from "../Offers/Offers";
import ShopEarly from "../ShopEarly/ShopEarly";
import WorldWide_partners from "../WorldWide_partners/WorldWide_partners";
import AnimalsThings from "../AnimalsThings/AnimalsThings";
import PetCare from "../PetCare/PetCare";
import Testimonials from "../Testimonials/Testimonials";
import AdorablePet from "../AdorablePet/AdorablePet";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";
import SideBar from '../ControlsComponents/SideBar';
import Simple from '../ControlsComponents/Simple';

const AllComponents = () => {
  return (
    <>
    <div>
    {/* <NavBar/> */}
    
    <SideBar/>
    <HeaderImage/>
    <Simple/>
    <PetsFood/>
    <Offers/>
    <ShopEarly/>
    <WorldWide_partners/>
    <AnimalsThings/>
    <PetCare/>
    <Testimonials/>
    <AdorablePet/>
    <Service/>
    {/* <Footer/>   */}
    </div>
    
    </>
  )
}

export default AllComponents