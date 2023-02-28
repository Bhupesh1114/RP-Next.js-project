import React, { useState, useRef , useEffect} from 'react';
import styles from "./Counter.module.css"

const Counter = () => {
    const data = [
        {
          fields: {
            AnimationStartingNumber: { value: 5400 },
            StatisticsNumber: { value: 6000 },
            StatisticsText: {
              value: "lobortis porta telluilose sed vehicula mauri ",
            },
          },
        },
        {
          fields: {
            AnimationStartingNumber: { value: 396500 },
            StatisticsNumber: { value: 397000 },
            StatisticsText: { value: "enean sed dolor in elit port accumsan" },
          },
        },
      ];
      
    const [count,setCount] = useState(0);
    const numberRef = useRef([]);
    const ref = useRef();
    const value = useRef(null);
    function startInterval() {
            value.current = setInterval(() => {
                setCount((count) => count + 1);
              }, 50);
      }
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            console.log(entry.isIntersecting)
            if(entry.isIntersecting){
                startInterval()
                observer.unobserve(ref.current)
              }
          });
          observer.observe(ref.current);
    }, [])


    useEffect(() => {
        if(count === 50){
            clearInterval(value.current);
        }
    },[count])
    
    
return (
<div ref={ref} className={styles.counter}>
    {data.map((item,index) => {
        if(index === 0){
            numberRef.current[index] = item.fields.AnimationStartingNumber.value;
            numberRef.current[index + 1] = item.fields.StatisticsNumber.value;
        }else{
            numberRef.current[index+1] = item.fields.AnimationStartingNumber.value;
            numberRef.current[index +2] = item.fields.StatisticsNumber.value;
        }
      console.log(numberRef.current)
      return <h1 key={index}>{item.fields.AnimationStartingNumber.value}</h1>
    })}
<h1>Count is: {count}</h1>
</div>
  )
}

export default Counter