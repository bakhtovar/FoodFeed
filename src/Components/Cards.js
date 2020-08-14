import React from 'react';
import {
    Card,
    Button,
    CardDeck,
    Nav,
  } from "react-bootstrap";
  

import alsham from '../Img/alsham.jpg';
import sega from '../Img/sega.jpg';
import traktir from '../Img/traktir.jpg';
import { Link } from "react-router-dom";


function Cards(){


    return(
      <div>
        <h2 className="text-center m-4" >Популярное</h2>
<CardDeck className="">
<Card >
  <Card.Img variant="top" src={alsham} />
  <Card.Body>
    <Card.Title>Al Sham Restaurant</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
Ливанская, Здоровая, Ближневосточная, Арабская, Средиземноморская
    </Card.Text>
    <Nav.Link>
              <Link to= "/restaraunts/alsham" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
<Card >
  <Card.Img variant="top" src={sega} />
  <Card.Body>
    <Card.Title>Кафе - бар Сегафредо</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
Европейская, Итальянская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/segafredo" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={traktir} />
  <Card.Body>
    <Card.Title>Traktir</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
Европейская, Русская, Восточноевропейская, Украинская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/traktir" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
    
  </Card.Body>
</Card>
</CardDeck>
      <div className="after"></div>
</div>

    );
}
export default Cards;