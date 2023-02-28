import styles from "./Header.module.scss";
import Image from "next/legacy/image";
import img from "public/logo.png";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from '../../hooks'

import { decrement, increment } from '../../slices/counterSlice'
const Header = () => {
    // const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch();

    const handleClick = () => {
      
    }
  return (
    <nav className={styles.header_container}>
       <div className={styles.header}>
       <Link href="/">
        <Image
          src={img}
          placeholder="blur"
          width="100"
          height="100"
          alt="logo"
          priority
        />
      </Link>
       </div>
       
       
       

      {/* <div> */}
{/*  
    <button onClick={() => dispatch(decrement())}>-</button>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment())}>+</button> */}


      {/* </div> */}
    </nav>
  );
};

export default Header;
