import React from "react";
import {
  Button,
} from "react-bootstrap";

function Comment({ comment, removeComment }) {
  

  function handleRemoveClick() {
  removeComment(comment.id);
  }

  return (
    <div style={{
   
       display: "flex" 
       }}> 
    {comment.text}

     <div 
       style={{
        paddingLeft:"30px"
      }}>
      <Button 
    
      onClick={handleRemoveClick}
      variant="outline-danger">X</Button>
</div>
    </div>
  );
}

export default Comment;
