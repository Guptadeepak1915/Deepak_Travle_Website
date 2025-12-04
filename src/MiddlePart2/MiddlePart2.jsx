import React from 'react';
import './MiddlePart2.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Top_Destination from '/src/MiddlePart2/Top_Destination';
// import Beach_Vacation from '/src/MiddlePart2/Beach_Vacation';
// import Weekend_Gateway from '/src/MiddlePart2/Weekend_Gateway';
// import Party_Destination from '/src/MiddlePart2/Party_Destination'
// import Indian_Pilgrim from '/src/MiddlePart2/Indian_Pilgrim';

const Footer = () => {
  return (
    <div>
      <div>
        <Router>
          <nav class="footer-nav-elements">
            <span><Link to="top-destination" class="link">TOP DESTINASTION</Link></span>
            <span><Link to="beach-vacation" class="link">BEACH VACATION</Link></span>
            <span><Link to="weekend-gateway" class="link">WEEKEND GATEWAY</Link></span>
            <span><Link to="party-destination" class="link">PARTY DESTINATION</Link></span>
            <span><Link to="indian-pilgrimes" class="link">INDIAN PILGRIMAGES</Link></span>
            <span><Link to="stay-like-royal" class="link">STAY LIKE ROYAL</Link></span>
          </nav>
          {/* <Routes>
            <Route path="top-destination" element={<Top_Destination />} />
            <Route path="beach-vacation" element={<Beach_Vacation />} />
            <Route path="weekend-gateway" element={<Weekend_Gateway />} />
            <Route path="party-destination" element={<Party_Destination />} />
            <Route path="indian-pilgrimes" element={<Indian_Pilgrim/>}/>

          </Routes> */}

        </Router>
      </div>
    </div>
  )
}

export default Footer
