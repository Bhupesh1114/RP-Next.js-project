import React, {useState} from 'react';
import { MainCard } from '../../styled-components/MainCard';
import UserCard from '../UserCard/UserCard';
import styles from "./Posts.module.css";
import Comments from '../Comments/Comments';
import PostData from '../PostData/PostData';
import Image from "next/legacy/image";
import Link from 'next/link';


export type commentsTypes = {
  id? : number,
  name : string,
  avatar : string,
  time : string,
  likes : number,
  comment : string,
  allReplies : []      // Not provided proper type
}

 export type postPropsTypes = {
  id : number,
  name : string,
  avatar : string,
  post : string,
  bannerImage : string,
  description: string,
  time : string,
  likes : number,
  commentsCount : number,
  share : number,
   comments : commentsTypes[]
}

const Posts = ({id,name, 
  avatar, post, bannerImage, 
  description, time, likes,
  commentsCount, share,comments}:postPropsTypes) => {
    const userCardProps = {name,avatar, post,time, bannerImage};
   
    // const [showComments, setShowComments] = useState(false);
    // const postDataProps = {id,likes, share, commentsCount, setShowComments, showComments};
    const postDataProps = {id,likes, share, commentsCount};

  return (
    <MainCard>
      <UserCard {...userCardProps} />
      <div className={styles.postThoughts}>
      <Link href="#">
        <p className={styles.desc}>{description}</p>
        </Link>
        <Link href="#">
        <div className={styles.bannerImage_container}>
      
          <Image
            className={styles.bannerImage}
            placeholder="blur"
            src={bannerImage}
            alt="banner_image"
            layout="fill"
            objectFit='cover'
            blurDataURL={`/_next/image?url=${bannerImage}&w=16&q=1`}
          />
         
        </div>
        </Link>
      </div>

      {/*Post Data like and comments*/}
      {/* <PostData {...postDataProps} />
       */}
      <PostData {...postDataProps} />


      {/* <Comments comments={comments} showComments={showComments}/>
       */}
      <Comments comments={comments}/>

    </MainCard>
  );

}

export default Posts