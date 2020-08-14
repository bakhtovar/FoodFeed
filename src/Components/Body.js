import React from 'react';
import {
    Carousel
  } from "react-bootstrap";

import Bella from '../Img/bella.png';
import Hyatt from '../Img/focaccia_grill.jpg';
import Sega from '../Img/sega.jpg';




  function Body() {

    return(
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Hyatt}
      alt='First slide'    />
    <Carousel.Caption>
      <h3>Лучшие рестораны в Душанбе.</h3>
      <p>Еда должна быть вкусной, в этом поможет FoodFeed.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Sega}
      alt='Second slide'
      
    />

    <Carousel.Caption>
      <h3>Лучшие рестораны в Душанбе</h3>
      <p>Отзывы настоящих людей</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bella}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Лучшие рестораны в Душанбе</h3>
      <p>Самые вкусные блюда.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    );
  }
  export default Body;