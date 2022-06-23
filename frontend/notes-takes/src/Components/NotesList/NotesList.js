import React, { useEffect, useState } from 'react'
import Data from '../../Data'
import './NotesList.css'

const NotesList = (props) => {
    const [List,setList]=useState(Data);
    const handleclick=(id)=>{
        props.getidfun(id);
    }

  return (
      
    <>
        
        {
            List.map((ele,ind)=>{
                return(
                    <a href="#" onClick={()=>handleclick(ele.id)}>
                        <div className='title'>
                        <p>
                            {ele.title}
                        </p>
                    </div>
                    </a>
                    
                )
            })
        }
        
    </>
  )
}

export default NotesList