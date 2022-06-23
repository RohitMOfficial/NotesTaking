import React, { useEffect, useState } from 'react'
import Data from '../../Data'

const Edit = (props) => {
    const [data,setData]=useState({});
    const [note,setNote]=useState("");

    const getnote=()=>{
        const tempnote=Data.filter((ele)=>{
            if(props.id===ele.id){
                return ele;
            }
            
        })

        const obj=tempnote[0];
        console.log(obj);
        
        setNote(obj.notes);
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const temp=Data.filter(ele=>{
            if(ele.id===props.id){
                return ele;
            }
            
        })
        
        const t=Data.map(ele=>{
            if(ele.id===props.id){
                ele.notes=note
                
                return ele;
            }
            else return ele;
        })
        console.log(t);
    }
    const handlechange=(e)=>{
        setNote(e.target.value);
    }
    console.log(note);
    useEffect(()=>{
        getnote();
        console.log("inside the edit component");

    },[]);
    
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            
                
            <textarea name="textarea" id="" cols="85" rows="30" onChange={handlechange} value={note || ""}/>
            <button >Save</button>
        </form>


    </div>
  )
}

export default Edit