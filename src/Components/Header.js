import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
 
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";


export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" as="ul" className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <div className="text-light" style={{
          paddingLeft:"30px",
          paddingTop:"10px"
      }}>  
          <h2>FoodFeed</h2>
                </div>
          <Nav.Item >
            <Nav.Link>
              <Link as={Link} to="/#" className="menu-name nav-link js-scroll-trigger ">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
         
          <Nav.Item >
            <Nav.Link>
              <Link as={Link}
                to="/about"
                className="menu-name nav-link js-scroll-trigger"
              >
                About Us
              </Link>
              
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item >
            <Nav.Link>
              <Link as={Link}
                to="/restaraunts"
                className="menu-name nav-link js-scroll-trigger"
              >
                Restaraunts
              </Link>
              
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item >
            <Nav.Link>
              <Link
                
                as={Link}
                to="/contact-us"
                className="menu-name nav-link js-scroll-trigger"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item   >
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          </Form>
          </Nav.Item>
          <Link  as={Link} to="/register" className="ml-auto">
               
                <Button 
                variant="outline-success">
                  Register
                </Button>
                
              </Link>
              </Navbar.Collapse>
              
        </Navbar>
      </div>
  );
}
