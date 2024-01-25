import React from 'react'
import Ground from "../assets/ground.png";
import Chicken from './Chicken';
export default function RootScene() {
  return (
    <div className='root-scene'>
      <div className='sky'></div>
      <div className='ground'>
        <Chicken/>
      </div>
    </div>
  )
}
