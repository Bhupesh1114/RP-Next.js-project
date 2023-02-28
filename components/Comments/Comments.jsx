import {useState} from 'react';
import PostData from '../PostData/PostData';
import UserCard from '../UserCard/UserCard';
import styles from "./Comments.module.css"

const Comments = ({comments}) => {
  
  return (
    <>
    {comments.map(card => {
      return(
        <div key={card.id} className={styles.commentsContainer}>
        <UserCard {...card} bgColor="#EEF0F2" padding="15px"/>
        <div className={styles.comment}>
        <PostData likes={card.likes} />
        </div>
        <div className={styles.replies}>
        {card.allReplies.map(reply => {
          return (
            <div key={reply.id}>
             <UserCard  {...reply} bgColor="#EEF0F2" padding="15px"/>
             <div className={styles.comment}>
             <PostData {...reply}/>
             </div>
            </div>
          )
         
        })}
        </div>
        </div>
      )
    })}
    </>
  )
}

export default Comments