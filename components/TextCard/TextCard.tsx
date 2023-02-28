import React from 'react'
import { Textcard } from '../../styled-components/TextCard';

type propTypes = {
    name? : string,
    description? : string,
    time? : string,
    newsHeading? : string,
    post? : string,
    list? : string,
    fontSize? : string,
    comment? : string,
    bgColor? :string,
    padding? : string,
    textCenter? : string
}

const TextCard = ({name , description, time, newsHeading, post, list,fontSize, comment, bgColor, padding , textCenter}: propTypes) => {
  return (
    <Textcard list={list} fontSize={fontSize} bgColor={bgColor} padding={padding}  textCenter={ textCenter}>
     <div className='textContainer'>
        <a href="" className='heading'>{name || newsHeading}</a>
        {time && <ul className='time'> 
            <li>{time}</li>
        </ul>}
     </div>
     <p className='desc'>{description || post || comment}</p>
    
    </Textcard>
  )
}

export default TextCard