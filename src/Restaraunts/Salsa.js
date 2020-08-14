import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Salsa(){
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
        
  <div className="headerSalsa">
          <div className="salsa_1"></div>
          <div className="salsa_2">
              <h1 className="salsa_2_title">Ресторан Salsa</h1>
              <p className="salsa_2_p">Ресторан Salsa – это латиноамериканская 
              кулинарная страсть, приправленная отличным сервисом и 
              народной популярностью. Именно здесь вы можете «вкусить»
               острые ощущения и «распробовать» дух жарких западных 
               стран. Блюда американской и европейской кухни 
              придутся по вкусу даже самым отъявленным гурманам. Уютный, по-летнему 
              оформленный 
              интерьер становится прекрасным дополнением к вкусовым изыскам
               заведения. Приглашаем всех заглянуть в этот латиноамериканский уголок 
               он завоевал немалую 
           славу среди жителей столицы.</p>
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

export default Salsa;