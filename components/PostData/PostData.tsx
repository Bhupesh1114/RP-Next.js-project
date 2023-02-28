import React, {Dispatch, SetStateAction, useState} from 'react';
import { Button } from '../../styled-components/Button';
import styles from "./PostData.module.css";
import {AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";


type propTypes = {
    likes : number,
    commentsCount : number,
    share : number,
    id : number,
    // setShowComments : Dispatch<SetStateAction<boolean>>,
    // showComments : boolean
}

const PostData = ({likes,commentsCount,share, id}:propTypes) => {
    const [likesCount,setLikeCount] = useState(false);

    const handleClick = () => {
        setLikeCount(!likesCount)
    }
  return (
    <div className={styles.postData}>
    <div className={commentsCount ? styles.postDataNumbers : styles.postDataNumbersWithReply}>
      <Button onClick={handleClick} padding='0px' color={likesCount ? "#0F6FEC":"#A1A1BB"}><AiFillLike /> Likes ({likes + (likesCount ? 1 : 0)})</Button>
      {commentsCount ? 
      // <Button onClick={() => setShowComments(!showComments)} color="#A1A1BB" padding='0px'><FaComment /> Comments ({commentsCount})</Button> : 
      <Button color="#A1A1BB" padding='0px'><FaComment /> Comments ({commentsCount})</Button> : 
      <Button color="#A1A1BB" padding='0px'><RxDotFilled />Reply</Button>}
    </div>
    {share && <div className={styles.sharePost}>
      <Button color="#A1A1BB" padding='0px'><IoIosShareAlt /> Share ({share})</Button>
    </div>}
  </div>
  )
}

export default PostData