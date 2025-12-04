import React from 'react';
import './Middle2.css';
import Pic6 from '/src/img/Delhi.jpg'
import Pic7 from '/src/img/Goa.jpg'
import Pic8 from '/src/img/uttarakhand.webp'
import Pic9 from '/src/img/run-of-kutch.jpg'
import Pic10 from '/src/img/varanasi.jpg'
import Pic11 from '/src/img/jaisalmer.jpg'
import Pic12 from '/src/img/Hampi-Karnataka.jpg'

const Place2 = () => {
  const nameonpic={
    position:"absolute",
    top:"75%",
    left:"10%",
    color:"white",
    fontSize:"25px",
    fontWeight:"bold",
    textShadow:"5px 5px 5px black"
  }
  const nameonpic1={
    position:"absolute",
    top:"75%",
    left:"10%",
    color:"white",
    fontSize:"30px",
    fontWeight:"bold",
    textShadow:"5px 5px 5px black"
  }
  return (
    <div class="main-div2">
      <div class="div1-under-main-div2">
    <img class="UttraKhand-pic8"src={Pic8} alt="" />
    <p  style={nameonpic1}>Uttrakhand</p>
      </div>

      <div class="div2-under-main-div2">
    
        <div class="div1-under-div2-under-main-div2">
          <div class="d1">
            <img class="delhi" src={Pic6} alt="Image not found" />
            <p style={nameonpic}>Delhi</p>
          </div>

          <div class="d1">
            <img class="delhi" src={Pic7} alt="" />
            <p style={nameonpic}>Goa</p>
            
          </div>

          <div class="d1">
            <img class="delhi" src={Pic9} alt="Image not found" />
            <p style={nameonpic}>Daman</p>
          </div>
        </div>
        <div class="div1-under-div2-under-main-div2">

          <div class="d1">
            <img class="delhi" src={Pic10} alt="Image not found" />
            <p style={nameonpic}>Varanshi(Up)</p>
          </div>

          <div class="d1">
            <img class="delhi" src={Pic11} alt="not found" />
            <p style={nameonpic}>Rajsthan</p>
          </div>

          <div class="d1">
            <img class="delhi" src={Pic12} alt="Image not found" />
            <p style={nameonpic}>Humpi,Karnatak</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Place2
