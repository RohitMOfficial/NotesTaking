import React, { useEffect, useState } from 'react'
import CreateNote from '../CreateNote/CreateNote'
import Edit from '../Edit.js/Edit'
import EmptyNote from '../Note/EmptyNote'
import Note from '../Note/Note'
import NotesList from '../NotesList/NotesList'
import './MainBox.css'
const MainBox = () => {
    const [noteid,setNoteid]=useState("");
    const [flag,setFlag]=useState(false);
    const [render,setRender]=useState("");

    const RenderMethod=(e)=>{
        if(e.target.id==="Editid"){
            setRender("Edit");
        }
        if(e.target.id==="Createid"){
            setRender("Create");
        }
        setFlag(false);
    }

    const getId=(id)=>{
        setNoteid(id);
        setFlag(true);
    }

  return (
      <div className='parentbox'>
          <div className='mainbox'>
            <div className='child-1'>
                <div className='child-1-1'>
                    <div className='child-1-1-1'>
                        <button>
                            My Notes
                        </button>
                    </div>
                    <div className='child-1-1-2'>
                        <button>
                            All Public Notes
                        </button>

                    </div>
                </div>
                <div className='child-1-2'>

                    <NotesList getidfun={getId}/>
                </div>
                
            </div>
            <div className='child-2'>
                <div>
                    <button  onClick={RenderMethod} id="Createid">Create Notes <span>+</span></button>
                    {flag && <button onClick={RenderMethod} id="Editid">Edit Notes</button>}
                </div>
                {
                    flag?<Note id={noteid}/>:(render==="Edit"?<Edit id={noteid}/>:(render==="Create"?<CreateNote/>:<EmptyNote/>))
                }
                
                {noteid}


            </div>
        </div>

      </div>
    
        
    
  )
}

export default MainBox