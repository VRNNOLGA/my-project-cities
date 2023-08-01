import { useState } from "react";
import './App.css';
import { cities } from "./Data";

function FolderTwo() {
    const [location, setLocation] =useState(cities);
    const deleteArea =(name) =>{
      let newArea = location.filter(area=> area.name !==name);
      setLocation(newArea)
    }
      return (
    <div>
      <div>
        <h2 className="letter">Choose place you like</h2>
        </div>
        {location.map((thing => {
          const{name, image} = thing;
          return(
            <div key ={name} className="plan">
            <div>
              <p className="words">{name}</p>
            </div>
            <div>
              <img src ={image} width="200px" alt="pic" />
            </div>
            <div className="block">
            <button className="btn1" onClick={()=>deleteArea(name)}>Delete</button>
            </div>
            </div>
          )
        }))}
        <div className ="block">
        <button className="btn2" onClick={()=>setLocation([])}>Delete all</button>
        </div>
        </div>
      
    )
  }
  export default FolderTwo;