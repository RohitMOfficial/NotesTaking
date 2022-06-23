import React, { useEffect, useState } from 'react';             
import Data from '../../Data';

const CreateNote = (props) => {
    const [note,setNote]=useState("");
    const [title,setTitle]=useState("");
    
    const handlechange=(e)=>{
        if(e.target.id==='title'){
            setTitle(e.target.value);
        }
        else{
            setNote(e.target.value);
        }
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(note==="" || title===""){
            alert("pls enter both title and value");
        }
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            Title: <input type="text" name='title' id='title' value={title} onChange={handlechange}/>          
            <textarea name="note" id="note" cols="85" rows="30" value={note || "" } onChange={handlechange}/>  
            <button>Create</button>

        </form>
    </div>
  )
}

export default CreateNote