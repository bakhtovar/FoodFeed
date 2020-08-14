import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import CommentForm from "../Comment/CommentForm";
import CommentsList from "../Comment/CommentsList";

const LOCAL_STORAGE_KEY = "react-comment-list-comments";

  const Alsham = () => {
  
   
    

    // function onFormSubmit(e) {
    //     e.preventDefault();
    //     const nameValue = document.querySelector("#name").value;
    //     const commentValue = document.querySelector("#comment").value;
    //     const listElem = document.querySelector("#list");   
       
    //     const liElem = document.createElement("li");
    //     liElem.id = `${nameValue}: ${commentValue}`;
    //     liElem.appendChild(document.createTextNode(`Name : ${nameValue}, Comment : ${commentValue}`));
    //     listElem.appendChild(liElem);
        

    // }
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
  
    // function toggleComplete(id) {
    //   setComments(
    //     comments.map(comment => {
    //       if (comment.id === id) {
    //         return {
    //           ...comment,
    //           completed: !comment.completed
    //         };
    //       }
    //       return comment;
    //     })
    //   );
    // }
  
    function removeComment(id) {
      setComments(comments.filter(comment => comment.id !== id));
    }
    

    return (
        <div>
      <Header/>
    
      
<div className="headerAlsham">
		<div className="alsham_1"></div>
		<div className="alsham_2">
			<h1 className="alsham_2_title">Ресторан Аль-Шам</h1>
            <p className="alsham_2_p">Ресторан арабской кухни,
         в котором вы сможете попробовать вкуснейшие блюда 
         от поваров из самой Сирии! Благодаря большому 
         разнообразию в меню, качественному сервису и 
         красочному интерьеру ресторан завоевал немалую 
         славу среди жителей столицы.</p>
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

    

export default Alsham;