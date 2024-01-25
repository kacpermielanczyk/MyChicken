import React, { useState, useEffect } from 'react';
import ChickenFeedGif from '../assets/Chicken_Run.gif';

export default function Chicken() {
  const [position, setPosition] = useState(spawn());
  const [direction, setDirection] = useState(-1);
  const offset = 128;
  const actorMove = 64;

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function spawn() {
    const quarterWindow = window.innerWidth / 4;
    const halfWindow = window.innerWidth / 2;
    return getRandomNum((halfWindow - quarterWindow),(halfWindow + quarterWindow));
  }

  spawn()
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      move();
    }, 1300);

    return () => {
      clearInterval(intervalID); 
    };
  }, [position]);

  function handleSetPosition(eventMove) {
    setPosition((prevData) => prevData + eventMove);
  }

  function handleSetDirection() {
    setDirection((prevData) => prevData * (-1));
  }

  function move() {
    if(direction === -1) {
      handleSetPosition(actorMove);
      if(window.innerWidth < (position + actorMove + offset)) {
        handleSetDirection();
      }
    } else if (direction === 1) {
      handleSetPosition(-actorMove);
      if(0 > (position - actorMove - offset)) {
        handleSetDirection();
      }
    }
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
