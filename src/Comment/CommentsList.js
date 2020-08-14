import React from "react";
import Comas from "./Comas";

function CommentList({ comments, removeComment, toggleComplete }) {
  return (
    <div>
      {comments.map(comment => (
        <Comas
          key={comments.id}
          comment={comment}
          removeComment={removeComment}
          
        />
      ))}
       {/* {names.map(name => (
        <Comas
          key={name}
          name={name}
          
        
        />
      ))} */}
    </div>
  );
}

export default CommentList;
