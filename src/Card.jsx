import React from 'react';

const Card = (props) => {
    return (
      <>
        <div className='main'>
          <div className='mypic'>
            <img src={props.myImg} alt='mypic' className='mypic1'/>
          </div>
          <div className='pic_info'>
            <h4>{props.name}</h4>
            <h5>{props.compnyName}</h5>
            <h5>{props.code}</h5>
            <a href={props.link} target='_blank'>
              <button> Click Now </button>
            </a>
          </div>
        </div>
      </>
    )
}

export default Card;