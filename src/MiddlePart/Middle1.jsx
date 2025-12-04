import React from 'react'
import './Middle1.css'
import Pic1 from '/src/img/kashmir.jpg'
import Pic2 from '/src/img/sikkim.jpg'
import Pic3 from '/src/img/Taj-Mahal.jpg'
import Pic4 from '/src/img/ladakh.jpg'
import Pic5 from '/src/img/Kerala.jpg'

const Place = () => {
  return (
    <div class="main-div1">
      <div class="place-div">
        <img class="place-pic" src={Pic1} alt="Not FOund Image" />
        <p>Kashmir: For its Captivating Natural Beauty</p>
      </div>
      <div class="place-div">
        <img class="place-pic"src={Pic2} alt="Image Not Found" />
        <p>Sikkim: For its Breathtaking Natural Vistas and Enthralling Adventures</p>
      </div>
      <div class="place-div">
        <img class="place-pic" src={Pic3} alt="Image Not Found" />
        <p>Agra, Uttar Pradesh: For its Unprecedented Mughal Grandeur</p>
      </div>
      <div class="place-div">
    <img class="place-pic" src={Pic4} alt="Image Not Found" />
    <p>Ladakh: For its Unmatched Adventure Options</p>
      </div>
      <div class="place-div">
        <img class="place-pic" src={Pic5} alt="Image Not Found" />
        <p>Kerala: For its Backwaters, Beaches & Culture</p>
      </div>
    </div>
  )
}

export default Place
