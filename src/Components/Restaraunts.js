import React from 'react';

import Header from '../Components/Header';
import {
    Card,
    Button,
    CardDeck,
    Nav,
  } from "react-bootstrap";
  

import alsham from '../Img/alsham.jpg';
import sega from '../Img/sega.jpg';
import forel from '../Img/for.jpeg';
import traktir from '../Img/traktir.jpg';
import bella from '../Img/bella.png';
import bukhoro from '../Img/bukhoro.jpg';
import cafemazza from '../Img/cafemazza.jpg';
import citirusta from '../Img/citirusta.jpg';
import foccacia from '../Img/focaccia_grill.jpg';
import inAsia from '../Img/inAsia.jpg';
import salsa from '../Img/salsa.jpg';
import toki from '../Img/toki.jpg';
import { Link } from "react-router-dom";


function Restaraunts(){

    return (
        <div>
        <Header/>
        <div>
        <CardDeck>
    <Card style={{ width: '18rem' }}>
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
    <Card style={{ width: '18rem' }}>
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

                </div>

                <div>

                <CardDeck>
    <Card>
    <Card.Img variant="top" src={forel} />
    <Card.Body>
    <Card.Title>Ресторан "Форель"</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
Ливанская, Здоровая, Ближневосточная, Арабская, Средиземноморская
    </Card.Text>
    <Nav.Link>
              <Link to= "/restaraunts/forel" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
    <Card >
    <Card.Img variant="top" src={bella} />
    <Card.Body>
    <Card.Title>Bella Pizza & Pasta
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />  
Пицца, Международная, Итальянская, Американская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/bella" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={bukhoro} />
         <Card.Body>
    <Card.Title>Ресторан "Бухоро"
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
    Ближневосточная, Арабская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/bukhoro" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
    
  </Card.Body>
</Card>
</CardDeck> 
</div>
       <div>
       <CardDeck>
    <Card style={{ width: "auto"}}>
    <Card.Img variant="top" src={cafemazza} />
    <Card.Body>
    <Card.Title>Mazza Cafe
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
Американская, Кафе, Европейская
    </Card.Text>
    <Nav.Link>
              <Link to= "/restaraunts/cafemazza" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={citirusta} />
    <Card.Body>
    <Card.Title>Citir Usta
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />  
Турецкая
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/citirusta" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={foccacia} />
         <Card.Body>
    <Card.Title>Foccacia Grill - Hyatt Regency Hotel
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
    Средиземноморская, Европейская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/foccacia" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
    
  </Card.Body>
</Card>
</CardDeck>          
       </div>
       <div>

       <CardDeck>
    <Card style={{ width: "auto"}}>
    <Card.Img variant="top" src={inAsia} />
    <Card.Body>
    <Card.Title>inAsia
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
    Японская, Азиатская, Китайская, Тайская
    </Card.Text>
    <Nav.Link>
              <Link to= "/restaraunts/inasia" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={salsa} />
    <Card.Body>
    <Card.Title>Salsa
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />  
    Мексиканская, Итальянская, Латиноамериканская, Испанская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/salsa" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
  </Card.Body>
</Card>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={toki} />
         <Card.Body>
    <Card.Title>Toqi Restaurant
</Card.Title>
    <Card.Text>
    ТИП КУХНИ <br />
    Средиземноморская, Европейская
    </Card.Text>
    <Nav.Link>
              <Link to="/restaraunts/toki" className="ml-auto">
                <Button variant="success">
                    Подробнее
                </Button>
                
              </Link>
            </Nav.Link>
    
  </Card.Body>
</Card>
</CardDeck>
       </div>
           </div>
    );
}

export default Restaraunts;