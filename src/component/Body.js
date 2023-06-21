import './style.css';
import React from 'react';

function Body(props) {
  return (
    <div className='body'> 
      <h2>{props.name}는  {props.address}에 사는 {props.age}세 {props.race} 입니다.</h2>
        <h2>좋아하는 것은 {props.favorList[props.num]} 입니다.</h2>
    </div>
  )
}

export default Body