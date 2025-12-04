import React from  'react'
import './BookButton.css'
const Book=()=>{
  return(
    <div class="mukhiya">
      <div class="sub-mukhiya">
        <h1>Book Ticket</h1>
      <form action="/Details" methos="post">
        <label>
          <input size="40" type="text" name="name" placeholder="Enter your name"/>
        </label><br/>
        <label>
          <input size="40" type="email" name="email" placeholder="Enter your email"/>
        </label><br/>
        <label>
          <input size="40" type="text" name="adhar" placeholder="Enter your Aadhar"/>
        </label>
        <br />
        <label>
          <input size="40" type="text" name="phone" placeholder="Enter your phone" />
        </label><br />
        <label>
          <input size="40" type="text" name="address" placeholder="Enter your address" />
        </label>
        <br/>
        <button>Submit</button>
      </form>
      </div>
      
    </div>
  )
}

export default Book