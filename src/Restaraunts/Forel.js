import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Forel(){
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
        
  <div className="headerForel">
          <div className="forel_1"></div>
          <div className="forel_2">
              <h1 className="forel_2_title">Кафе Форель</h1>
              <p className="forel_2_p">Кафе Форель приглашает всех отведать вкусные шашлыки, приготовленные из отборного мясо; 
              домашнего 
              цыплёнка табака; рыбные блюда и несравненные сочные и нежные крылышки. Уютная обстановка и
               приемлемые цены не оставят
                Вас равнодушными. Наш адрес улица К
                аххарова 60, ориентир район текстиль-к
                омбината города Душанбе.</p>
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

export default Forel;