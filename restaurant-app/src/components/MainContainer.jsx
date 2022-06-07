import React from 'react';
import Delivery from "../img/delivery.png";
import './maincontainer.css';
import HeroBg from "../img/heroBg.png";
import {heropData} from "../utils/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RowContainer, MenuContainer, CartContainer } from "../components";
import { useStateValue } from '../context/StateProvider';

const MainContainer = () => {
  const [{foodItems, cartShow}, dispatch] = useStateValue();

  return (
    <div className="main">
      <div className="main-order">
      <div className="main-news">
        <div className="bike-delivery">
          <p className="bike">Bike Delivery</p>
          <div className="bike-image" >
            <img src={Delivery} className="" alt="delivery"/>
          </div>
        </div>
        <p style={{fontSize: '4rem', fontWeight: 'bold'}}>
          The Fastest Delivery in <span style={{color: "rgb(234 88 12)", fontSize:"4.5rem"}}>Your City</span>
        </p>

        <p style={{color: "gray", lineHeight:"25px", marginTop: "15px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt consequatur beatae reiciendis magnam
           maiores tenetur excepturi, ut molestiae nesciunt eaque! Commodi earum, nesciunt consequatur laborum sit 
           enim, ratione veniam atque eius doloribus nobis voluptatum quibusdam laudantium odio modi. 
          
        </p>
        <div className="order">
        <button type="button"
          
        >
          Order Now
        </button>
        </div>
        
      </div>
      <div className="main-hero">
      <div className="hero-overlay">
        { heropData.map(item => {
          return (
            <div className="overlay-item">
            <img src={item.imageSrc} className="item-image" alt={item.name}/>
            <p className="iceream">{item.name}</p>
            <p className="vanilla">{item.decp}</p>
            <p>
              <span className="dollar">$</span>
              <span className="money">{item.price}</span>
            </p>
          </div>
          )
        })}
          
      </div>
        <img src={HeroBg} className="hero-image" alt="hero-bg" style={{height:"600px"}}/>
        
      </div>
      </div>
      

      <section className="main-section">
        <div className="products">
          <p className="text">Our fresh & healthy fruits</p>
          <div className="move-product">
            <div className="arrow-left">
              <MdChevronLeft style={{fontSize:"1.5rem", color:"white"}}/>
            </div>
            <div className="arrow-right" >
              <MdChevronRight style={{fontSize:"1.5rem", color:"white"}}/>
            </div>
          </div>
        </div>

        <RowContainer 
        flag={true}
        data = {foodItems?.filter((n) => n.category === "fruits")}
        />
        <MenuContainer/>
        {cartShow && <CartContainer/>}
      </section>
    </div>
  )
}

export default MainContainer