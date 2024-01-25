import React, { useState, useEffect } from 'react';
import ChickenFeedGif from '../assets/Chicken_Run.gif';

export default function Chicken() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(-1);
  const actorMove = 40;

  useEffect(() => {
    const intervalID = setInterval(() => {
      move();
    }, 1300);

    return () => {
      clearInterval(intervalID); 
    };
  }, [position]);

  function handleSetPosition() {
    setPosition((prevData) => prevData + actorMove);
  }

  function move() {
    if(window.innerWidth > (position + actorMove + 64)) {
      handleSetPosition();
    }
    console.log(position);
  }

  return (
    <div>
      <img
        className='test chicken'
        height={64}
        width={64}
        src={ChickenFeedGif}
        style={{
          position: 'absolute',
          left: `${position}px`,
          transition: "1300ms",
          transform: `scaleX(${direction})`,
        }}
        alt='Chicken'
      />
    </div>
  );
}
