import React, { Component, useState } from 'react';
import data from './datas/data001.json';
import "./style/app.css"
import pic from "./pic/leaf.jpg"
 

function  App()  {
  
  const [arama,setArama] = useState(data);
  const [searchTerm,setSearchTerm] = useState("");

    return (
      <div className="App">

        <div>
        <h1> Ürünler</h1>
        <div className='inputContainer'>
          <input className='search' type="text" placeholder='Arama Ürrünü Giriniz' onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </div>

        <div className='dataContainer'>
          {data.filter((val)=> {
            if(searchTerm ==""){
              return val;
            }
            else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
            {return val;}
          }).map((val)=>{
            return (
              <div className='data' key={val.id}>
                <img src={pic}></img>
                <h3> {val.image}</h3>
                <h3> {val.title}</h3>
                <p>{val.Description}</p>
                </div>
            )
          })
          }
        </div>
        </div>
  
      </div>
    );
  }
 

export default App;
