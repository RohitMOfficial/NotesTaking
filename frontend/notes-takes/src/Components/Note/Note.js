import React, { useEffect, useState } from 'react'
import Data from '../../Data'


const Note = (props) => {
    const [note,setNote]=useState({});
    const [flag,setFlag]=useState(false);
    const getnote=()=>{
        const tempnote=Data.filter((ele)=>{
            if(props.id===ele.id){
                return ele;
            }
            
        })
        if(tempnote.length!==0){
            setNote(tempnote[0]);
            setFlag(true);
        }
        console.log(tempnote)
    }
    useEffect(()=>{
        console.log("this is caleed");
        getnote();
    },[props.id])
    
  return (
    <div>

        
        <h1>{note.notes}</h1>
        
    </div>
  )
}

export default Note
