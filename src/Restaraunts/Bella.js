import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";
function Bella(){
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
        <div className="headerBella">
		<div className="bella_1"></div>
		<div className="bella_2">
			<h1 className="bella_2_title">Bella pizza & Pasta</h1>
            <p className="bella_2_p"> Постоянные гости кафе 
            оценивают здешнюю пиццу 
            как «правильную», то есть, максимально приближенную
             к итальянской по своим вкусовым качествам.
              Кафе идеально подходит для дружеских встреч, 
              деловых обедов или времяпрепровождения с детьми.
               Светлый интерьер поможет вам окунуться в атмосферу уюта 
               в самом центре Душанбе. Здесь вы сможете выбрать 4 размера 
               пиццы на тонком тесте. Для настоящих романтиков «Bella pizza 
               and Pasta» предлагает
             эксклюзивную пиццу  в форме сердца.
             А если вы устали от однообразной пиццы
              и хотите попробовать что-то новенькое – тогда вам снова сюда!
               Вы когда-нибудь видели пиццу с нутеллой, драже M&amp;M’s и 
               сливочным сыром с ягодами? В нашем кафе пробовать новое очень просто!</p>
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
 
  
       
  

 
          

export default Bella;