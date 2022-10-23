import React from 'react'
import './News.scss'
const News = (props) => {
  return (
    <div className="about__news__card">
        <h3>news <font>-</font> Mar 1, 2022</h3>
        <h2>{props.h2}</h2>
    </div>
  )
}

export default News