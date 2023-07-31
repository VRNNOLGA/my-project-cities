import { useState } from "react";
import './App.css';
import { places } from "./Place";

function FolderTwo() {
    const [place, setPlace] =useState(places);
    const {word, show} = places[place];

     return (
      <div>
      <div>
        <h2 className="letter">Choose the place you like</h2>
        </div>
        <div>
        <h3>{word}</h3>
        </div>
    <div className='block'>
      <img src = {show} width="250px" alt="picture"/>
    </div>
        </div>
  
    )
  }
  export default FolderTwo;