import React from 'react'
import './prot.css'
import Sambhaji from "../image/Picture1.png"

export const Protfolio = () => {
  return (
    <div className='card'>
        <div>
            <img src={`${Sambhaji}`} alt='image'/>
        </div>
        <div className='text-box'>
            <div className='main'>
                <span>Sambhaji Mange</span>
            </div>
            <div className='sub'>
                <span>Sammy</span>
            </div>
        </div>
    </div>
  )
}
