import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";
function Focaccia(){
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
      
<div className="headerFoca">
		<div className="foca_1"></div>
		<div className="foca_2">
			<h1 className="foca_2_title">Фокачча Гриль</h1>
            <p className="foca_2_p">Один из лучших ресторанов в Душанбе, 
            предлагающий международную и средиземноморскую кухни в сочетании с необычной
             атмосферой, 
            где шеф-повар готовит прямо на ваших глазах на открытой кухне.</p>
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


export default Focaccia;