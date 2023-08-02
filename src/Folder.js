import { useState } from "react";
import './App.css';
import { cities } from "./data";

function Folder() {
    const [city, setCity] =useState(0);
    const {name, image} = cities[city];
    const backCity =() => {
      setCity((city => {
        city--;
        if(city < 0) {
          return cities.length-1;
        }
        return city;
      }
      ))
    }
    const nextCity = () =>{
      setCity((city =>{
        city++;
        if(city >cities.length-1) {
          city =0;
        }
        return city;
      }))
    }
    return (
      <div>
      <div>
        <h1>The best places and cities in Italy</h1>
        </div>
        <h2>{name}</h2>
    <div className='block'>
      <button className="btn" onClick ={backCity}>BACK</button>
      <img src = {image} width="250px" alt="pic"/>
      <button className="btn" onClick ={nextCity}>NEXT</button>
    </div>
        </div>
  
    )
  }
  export default Folder;
  
  
  