import React from 'react';
import gif from '../Img/FoodFeed.jpg';

  function Body() {

    return(
        <div>
            <img src={gif} 
  style={{  
    width:"auto",
    height:"400px"
    
  }}
  alt="gif" />
        <div style={{
  textAlign:"center",
  paddingTop:"30px",
  paddingBottom:"30px"
  }}>
      <p className="FoodFeedText">FoodFeed - adviser about restaraunts in Dushanbe</p>
            </div>
            <div className="backFooter">
    <span className="copyright">Copyright &copy; Bakhtovar's Website 2020</span>
            </div>
        </div>
    );
  }
  export default Body;