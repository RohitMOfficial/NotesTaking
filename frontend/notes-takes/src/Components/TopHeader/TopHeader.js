import React, { useEffect, useRef, useState } from 'react'
import MainBox from '../MainBox/MainBox';

import './TopHeader.css'
const TopHeader = () => {
    const [log,setLog]=useState(true);
    const [user,setUser]=useState("Rohit");

  return (
      <>
      <div>
          <header>
            <div>
                <a href="#">Notes</a>
            </div>
            <div>
                <a href="#">Login</a>
            </div>

        </header>

      </div>
      {/* <MainBox/> */}
      </>
      
    
        
  )
}

export default TopHeader