import React, { useState } from "react";
import uuid from "uuid";
import {
  Button,
} from "react-bootstrap";

function CommentForm({addComment }) {
  const [comment, setComment] = useState({
    id: "",
    text: "",
  });
  // const [name, setName] = useState(
  //   {
  //     text: ""
  //   }
  // );
  function handleCommentInputChange(e) {
 
    setComment({ ...comment, text: e.target.value });
  }
  
  

  

  function handleSubmit(e) {
    e.preventDefault(); 
    
    if (comment.text.trim()) {
      addComment({ ...comment, id: uuid.v4() });
      setComment({ ...comment, text: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      
      <textarea 
      className="textArea"
       label="comment"
       type="text"
       name="task"
       value={comment.text}
       placeholder="comment"
       onChange={handleCommentInputChange}/>
      
      
      <Button 
      type="submit"
      variant="success">Отправить</Button>
      
      <div className="divComment">
        <h3>Комментарии:</h3>
      </div>
    </form>
  );
}

export default CommentForm;
