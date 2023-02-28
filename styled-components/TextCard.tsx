import styled from "styled-components";

type propsTypes = {
    list? : string,
    fontSize? : string,
    bgColor? : string,
    padding? :string,
    textCenter? : string
}

export const Textcard = styled.div<propsTypes>`
width:100%;
margin: 12px 0px;
margin-left: 10px;
background-color : ${props => props.bgColor ? props.bgColor : "#fff"};
border-radius : 5px;
padding : ${props => props.padding ? props.padding : "0px"};
.textContainer{
    display: ${props => props.list ? "block" : "flex"};
    justify-content : ${props => props.textCenter ? props.textCenter : "space-between"};
}
.heading{
    font-size: ${props => props.fontSize ? props.fontSize : "15px"};
    margin-bottom: 0px;
    text-decoration: none;
    font-weight: 700;
    color: #000;
    transition: color 0.2s ease-in-out; 
    :hover{
        color: #0F6FEC;
    }
}
.time{
    color : gray;
    font-size: 14px;
    padding-left: 0px;
    list-style: ${props => props.list ? props.list : ""};
    margin-bottom :0px;
    li{
    margin-left: ${props => props.list ? "0px" : "25px"}
}
}

.desc{
    margin-bottom: 0px;
    font-size: 13px;
    color: gray;
    line-height: 25px;
}


`