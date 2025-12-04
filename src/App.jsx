import React from 'react'
import logo from './img/travle-logo.jpeg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './HeaderElement/Home'
import Place from './HeaderElement/Place'
import TourPackage from './HeaderElement/TourPackage'
import Trekking from './HeaderElement/Trekking'
import About from './HeaderElement/About'
import Contact from './HeaderElement/Contact'
import BookButton from '/src/HeaderElement/BookButton.jsx'
import Login from './HeaderElement/Login'



const Heading = () => {
  return (
    <div style={{marginLeft:"0px"}}>
      <div class="heading-div1">
        <h1>TRAVEL ALL OVER INDIA</h1>
      </div>

      <div class="logo-nav">
        <div class="logo-div">
          <img src={logo} alt="Note Found" class="logo" />
        </div>
        
        <div class="nav-elements-div">
          <Router>
            <nav class="nav-elements">
              <span><Link to="/" class="link">Home</Link></span>
              <span><Link to="/place" class="link">Place</Link></span>
              <span><Link to="/tour-package" class="link">Tour Package</Link></span>
              <span><Link to="/trekking" class="link">Trekking</Link></span>
              <span><Link to="/about" class="link">About</Link></span>
              <span><Link to="/contact" class="link">Contact</Link></span>
              <Link to="/login"><button class="book-Button">Login</button></Link>
              <Link to="/form"> <button class="book-Button">Book Ticket</button></Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/place" element={<Place />} />
              <Route path="/tour-package" element={<TourPackage />} />
              <Route path="/trekking" element={<Trekking />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/form"element={<BookButton/>} />
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
}
export default Heading