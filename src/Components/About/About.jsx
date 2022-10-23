import React from 'react'
import './About.scss'
import News from './News/News'
const About = () => {
  return (
    <div className="about">
        <div className="about__katta">
            <h3>about us</h3>
            <h2>It’s our job to make your home feel like it belongs to you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla, purus sit amet ante vel odio condimentum tortor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a risus ac mauris cursus tempor at sit amet orci. Suspendisse vel laoreet mauris. Donec sit amet ante vel odio condimentum lobortis in nec ex. Curabitur varius iaculis vehicula. Vestibulum quis venenatis lorem at, suscipit vel mauris purus.</p>

        </div>

        <div className="about__news">
            <News h2='Incidunt eveniet lorem adipisci quod est quaerat'/>
            <News h2='Excepturi nulla lorem quam velit error qui dolor'/>
        </div>
    </div>
  )
}

export default About