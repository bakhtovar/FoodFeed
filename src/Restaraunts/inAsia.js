import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Citir(){
    const [comments, setComments] = useState([]);

    useEffect(() => {
   
      const storagecomments = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storagecomments) {
        setComments(storagecomments);
      }
    }, []);
  
    useEffect(() => {
     
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments));
    }, [comments]);
  
    function addComment(comment) {
      
      setComments([comment, ...comments]);
    }
  
   
  
    function removeComment(id) {
      setComments(comments.filter(comment => comment.id !== id));
    }
       
    return (
        <div>
        <Header/>
        
        <div className="headerAsia">
          <div className="asia_1"></div>
          <div className="asia_2">
              <h1 className="asia_2_title">inAsia</h1>
              <p className="asia_2_p">Успокаивающий и страстный, с оформлением, которое дразнит 
              глаз и соблазнительным меню, ресторан InAzia 
              предоставляет к вашему столу блюда вьетнамской, тайской, китайской, индонезийской и японской кухни.</p>
          </div>

          </div>
          <div className="comAlsham">
          <h3 className="commentText">Добавить коммент:           </h3> 
   
        
    
        </div>
        <div className="comment">
    
      <CommentForm addComment={addComment} />
      <CommentsList
        comments={comments}
        removeComment={removeComment}
        
      />
    </div>
      </div>
  
    );
}

export default Citir;