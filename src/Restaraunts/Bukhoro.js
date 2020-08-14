import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

function Bukhoro(){
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
        
  <div className="headerBukhoro">
          <div className="bukhoro_1"></div>
          <div className="bukhoro_2">
              <h1 className="bukhoro_2_title">Ресторан  Бухоро</h1>
              <p className="bukhoro_2_p">Восточный интерьер и
               приятная живая музыка очень хорошо дополняет стиль и имидж нашего
                заведения. Кроме того, разнообразный колорит блюд заставит вас окунуться в
                 атмосферу восточной культуры и насладиться потрясающими и неповторимыми вкусами.
                 Обстановка позволяет расслабиться и насладиться атмосферой душевного умиротворения. 
                 В нашем ресторане Вы сможете найти не только уютное местечко, душевную атмосферу, получить 
                 массу незабываемых впечатлений, но и насладиться истинным восточным гостеприимством. В Нашем заведении,
                  помимо восточных блюд, действуют кухни других культур. Окунитесь в мир Востока, забыв о будничной суете!
                   Отдохните 
                  в «Бухаре»! Наши двери всегда открыты для вас. 
              Приходите и убедитесь в этом лично.</p>
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

export default Bukhoro;