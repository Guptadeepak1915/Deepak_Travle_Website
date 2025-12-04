import React from 'react'
import './Top_Destination.css'
import Pic1 from '/src/img/Goa.jpg'
import Pic2 from '/src/img/himachal.webp'
import Pic3 from '/src/img/andaman.jpg'
import Pic4 from '/src/img/karnataka-package.webp'

const Top_Destination = () => {
  return (
    <div class="Top_destination-main-div">
      <div class="pic-div">
        <img class="pics" src={Pic1} alt="" />
        <p class="para1">Kerla Package</p>
      </div>

      <div class="pic-div">
        <img class="pics" src={Pic2} alt="" />
        <p class="para1">Himachal Package </p>
      </div>

      <div class="pic-div">
        <img class="pics" src={Pic3} alt="" />
        <p class="para1">Andaman Package</p>
      </div>
      <div class="pic-div">
        <img class="pics" src={Pic4} alt="" />
        <p class="para1">Karnataka Package</p>
      </div>


    </div>
  )
}

export default Top_Destination
