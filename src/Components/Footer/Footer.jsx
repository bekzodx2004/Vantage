import React from 'react'
import './Footer.scss'
import Li from '../Header/Navbar/Li'

const Footer = () => {
  return (
    <div className="footer">
        <form action="">
            <input type="text" placeholder='Newsletter (Emter Email)'/>
            <button>Subscribe</button>
        </form>
        <div>
            <ul>
                <Li text={"licensing"}/>
                <Li text={"styles"}/>
                <Li text={"changelog"}/>
            </ul>
            <p>powerd by <font>webflow.com</font></p>
        </div>
    </div>
  )
}

export default Footer