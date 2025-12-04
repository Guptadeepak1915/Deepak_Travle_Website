import React from 'react'
import './Beach_Vacation.css'
import Pic1 from '/src/img/Cavelossim-Goa.jpg'
import Pic2 from '/src/img/Kovalam-Beach-Kerala.jpg'
import Pic3 from '/src/img/Marina-Beach-Chennai.jpg'

const Beach_Vacation = () => {
  return (
    <div class="beach-main-div">
      <div class="beach-div">
        <img class="beach-pics" src={Pic1} alt="Not Found" />
        <h3>Cavelossim-Goa</h3>
        
      </div>
      <div class="beach-div">
        <img class="beach-pics" src={Pic2} alt="not Found" />
        <h3>Kovalam-Beach-Kerala</h3>
      </div>
      <div class="beach-div">
        <img class="beach-pics" src={Pic3} alt="Not found" />
        <h3>Marina-Beach-Chennai</h3>
      </div>
      <div class="beach-div">
        <img class="beach-pics" src="src/img/Mandrem-Beach-North-Goa.jpg" alt="Not Found" />
        <h3>Mandrem-Beach-North-Goa</h3>
      </div>
    </div>
  )
}

export default Beach_Vacation
