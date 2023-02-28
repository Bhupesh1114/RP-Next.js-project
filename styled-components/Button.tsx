import styled from "styled-components";

type propTypes = {
    bgColor? : string,
    color? : string,
    hover?: string,
    textAlign? : string,
    fontSize? : string,
    padding? :string,
    topBorder? : string
}


export const Button = styled.a<propTypes>`
background-color : ${props => props.bgColor ? props.bgColor : "#fff"};
padding : ${props => props.padding ? props.padding : "10px 0px"};
border-radius :${props => props.topBorder ? props.topBorder : "5px"};
text-decoration:none;
letter-spacing: 0.8px;
font-size: ${props => props.fontSize ? props.fontSize : "13px"};
display : block;
text-align: ${props => props.textAlign ? props.textAlign : "left"};
color : ${props => props.color ? props.color : "#000"};
transition: all 0.3s ease-in-out;
cursor:pointer;
font-weight: 700;
user-select: none; 
border-top : ${props => props.topBorder ? props.topBorder : "none"};
:hover{
    color : ${props => props.color ? "" : props.color};
}
${props => props.hover && `:hover{
    background-color : #0F6FEC;
    color: #fff;
}`}

.icon{
margin-right:10px;
width:20px
}

`