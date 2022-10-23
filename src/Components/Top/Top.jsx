import React from 'react'
import './Top.scss'

import Big from '../images/h3.png'
import Li from '../Header/Navbar/Li'
const Top = () => {
  return (
    <div className="top">
        <div className="top__img">
            <img src={Big} alt="" />

            <ul>
                <Li text="facebook"/>
                <Li text="twitter"/>
                <Li text="instagram"/>
                <Li text="pinterest"/>
            </ul>
        </div>
        <div className="top__text">
            <div>
                <h3>vantage studio</h3>
                <h2>Your vision, our expertise!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla.</p>
                <button>explore</button>
                <button>let's chat</button>
            </div>
        </div>
    </div>
  )
}

export default Top