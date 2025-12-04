import React from 'react'
import './Home.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Body from '/src/Body.jsx'
import Middle1 from '/src/MiddlePart/Middle1'
import Middle2 from '/src/MiddlePart/Middle2'
import '/src/MiddlePart2/MiddlePart2.css'
import Footer from '/src/FooterElements/Footer'
import Top_Destination from '../MiddlePart2/Top_Destination'

const Home = () => {
  return (
    <div class="Container">
      <div class="front-view"></div>

      {/* <div className='slider'>
          <div className='slides'>
            <img src='/src/img/andaman.jpg' alt='andamand pic'/>
            <img src='/src/img/Goa2.jpg' alt='goa pic'/>
            <img src='/src/img/kerala.jpg' alt='kerala pic'/>
            <img src='/src/img/kashmir.jpg' alt='manali pic'/>
          </div>
        </div> */}
        
      {/* <Body /> */}

      <div class="heading-div2">
        <h2 class="head2">Explore Top Destinations by Region</h2>
      </div>

      <Middle1 />

      <div>
        <h2 class="heading-div3">TOP FAMOUS PLACE IN INDIA</h2>
      </div>

      <Middle2 />
      <br/><br/>
      {/* <div>
        <nav class="footer-nav-elements">
          <span><Link to="top-destination" class="link">TOP DESTINASTION</Link></span>
          <span><Link to="beach-vacation" class="link">BEACH VACATION</Link></span>
          <span><Link to="weekend-gateway" class="link">WEEKEND GATEWAY</Link></span>
          <span><Link to="party-destination" class="link">PARTY DESTINATION</Link></span>
          <span><Link to="indian-pilgrimes" class="link">INDIAN PILGRIMAGES</Link></span>
          <span><Link to="stay-like-royal" class="link">STAY LIKE ROYAL</Link></span>
        </nav>
      </div> */}

      <Footer />


    </div>
  )
}

export default Home
