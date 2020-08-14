import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Mazza(){
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
        
  <div className="headerMazza">
          <div className="mazza_1"></div>
          <div className="mazza_2">
              <h1 className="mazza_2_title">Кафе Mazza</h1>
              <p className="mazza_2_p">Маzza – это уникальное кафе в самом сердце нашей столицы.
               В своих блюдах Mazza предлагает овощи, многообразие мясных начинок, различные соусы и хлеб,
                который выпекается прямо в ресторане. Еще одна “фишка” заведения – вкуснейшие кондитерские
                 изделия! Отлично место, чтобы посидеть с друзьями. Да и одному тут посидеть очень даже приятно
                  – под чашечку
               вкуснейшего кофе подумать о жизни, глядя на шумный город за окном. Приходите и убедитесь сами! .</p>
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

export default Mazza;