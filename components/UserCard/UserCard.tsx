import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./UserCard.module.css";
import { FaUserCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import TextCard from "../TextCard/TextCard";
import Image from "next/legacy/image";
import Link from "next/link";

type propTypes = {
  id?: number;
  name?: string;
  post?: string;
  avatar?: string;
  time? : string,
  description? : string,
  comment? : string,
  ngColor? : string,
  bgColor? : string,
  padding? : string,
  bannerImage? : string
};
const UserCard = ({ name, post, avatar , time, description, comment, bgColor, padding, bannerImage}:propTypes) => {
  const [sendRequest, setSendRequest] = useState(false);
  const textCardProps = {name,post,time, description,comment};
  
  return (
    <div className={styles.userCard}>
      <Link href="">
      <Image  className={styles.avatar} src={avatar?avatar:""} alt="avatar" width="50" height="50" />
      </Link>
      <div>
       
     <TextCard {...textCardProps} bgColor={bgColor} padding={padding}/>       
      </div>
      {comment ? null :  <button
        aria-label="send follow request"
        className={styles.plusIcon}
        onClick={() => setSendRequest(!sendRequest)}
      >
        {bannerImage ? <BsThreeDots /> :  sendRequest ? <FaUserCheck /> : <BsPlusLg />}
       
      </button>}

    </div>
  );
};

export default UserCard;
