import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Segafredo(){
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
        
  <div className="headerSega">
          <div className="sega_1"></div>
          <div className="sega_2">
              <h1 className="sega_2_title">Сегафредо Занетти</h1>
              <p className="sega_2_p">Segafredo – популярнейшее итальянское кафе в
               центре Душанбе. Здесь вас ожидает 
               лаконичный европейский дизайн, вкусные
                блюда и напитки, а просторный и уютный
                 зал дополняется терассой с несколькими 
                 столиками, где будет удобно провести 
                 деловую встречу или увидеться со своими 
                 близкими. Segafredo
               Zanetti – универсальное решение для вашего вечера.</p>
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

export default Segafredo;