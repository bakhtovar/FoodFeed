import React from 'react';
import Header from './Header';
import bakha from '../Img/bakha.jpg';
import inst from '../Img/inst.png';
import linked from '../Img/in.png';
import facebook from '../Img/fb.png';
import Footer  from '../Components/Footer';


function About(){


    return(
        <div
        >
            
            <Header/>
          
        <section className="section">
            
                  <div className="text">
                      <h1>Hi,<br/> I'm <span>Bakhtovar-Perfecto</span><br/> Web Designer</h1>
                      <a href="https://telegram.me/iambakhtovar">
                          <button>Contact</button>
                      </a>
                        <div className="social">
                      <a href="https://www.instagram.com/iambakhtovar/">
                          <img className="inst" src={inst} alt="instagram"/>
                      </a>
                      <a href="https://www.linkedin.com/in/bakhtovar/">
                          <img className="linked" src={linked} alt="linkedIn"/>
                      </a>
                      <a href="https://www.facebook.com/iambakhtovar">
                          <img className="facebook" src={facebook} alt="facebook"/>
                      </a>

                      </div>
                  </div>
                  <div className="foto">
                      <img src={bakha} alt="bakhaa"/>
                  </div>
              </section>
              <div className="after"></div>
              <Footer/>
              
        </div>    
 );
}
export default About;