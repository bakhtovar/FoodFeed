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
        
  <div className="headerCitir">
          <div className="citir_1"></div>
          <div className="citir_2">
              <h1 className="citir_2_title">Chitir Usta</h1>
              <p className="citir_2_p">В самом центре города расположился турецкий ресторан «Chitir usta».
               Здесь в тишине и покое вы можете расслабиться и пить прекрасный турецкий кофе. Для тех, кто проголодался, в ресторане 
               отличный выбор блюд. Интерьер ресторана сразу погружает вас в особую атмосферу, и вы непременно с первых минут 
              забудете обо всем и будете с интересом рассматривать окружающее вас пространство. Ресторан «Chitir usta» – это то место,
               которое оставит приятный след в вашей памяти.</p>
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

export default Citir;