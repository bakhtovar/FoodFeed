import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Traktir(){
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
        
  <div className="headerTraktir">
          <div className="traktir_1"></div>
          <div className="traktir_2">
              <h1 className="traktir_2_title">«Трактиръ»</h1>
              <p className="traktir_2_p">Прекрасные славянские традиции 
              возрождает уютный ресторан под названием «Трактиръ». Здесь вам подадут изысканные 
              яства украинской кухни, и как водится, все кушанья готовят только из натуральных 
              продуктов и в соответствии 
              с вековыми традициями. Интерьер под стать тематике: деревянные столы, картины из 
              народной жизни и многое другое создают по-истине славянскую атмосферу.</p>
          </div>
          </div>
          <div className="comAlsham">
          <h3 className="commentText">Добавить коммент:
                     </h3> 
   
        
    
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

export default Traktir;



