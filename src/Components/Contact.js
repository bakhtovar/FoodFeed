import React from 'react';
import emailjs from 'emailjs-com';
import Header from '../Components/Header';
import gif from '../Img/FoodFeed.gif';
import Footer  from '../Components/Footer';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('bakhtovar', 'bakha', e.target, 'user_eIM0Nan09RkG9WxMOJmIQ')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
  <Header/>
  <div class="row">
        <div class="col-6">
              <form className="contact-form" onSubmit={sendEmail}>
<div className="contact">
      <label>Name:</label> <br/>
      <input type="text" name="from_name" />
      <br/>
      <br/>
      <label>Email:</label> <br/>
      <input type="email" name="from_email" />
      <br/>
      <br/>
      <label>Message</label> <br/>
      <textarea name="html_message" />
      <br/>
      <input type="submit" value="Send" />
      <br/>
      </div>
    </form>
    </div>
    <div className="col-6">
<img align="center" src={gif} 
  style={{  
    paddingTop:"100px",
    width:"auto",
    height:"400px"
    
  }}
  alt="gif" />
</div>
</div>
<div className="after"></div>
<Footer/>
    
    </div>
  );
}