import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shopping5 from '../assets/shopping5rb.png'
import "./Catogory.css";
const imgh = {
    
    height: "200px",
    // width: "500px"
}
const margin={
    marginLeft:"0%"
}

const CatogoryItems = (props) => {
    return (
        <div  className="row container-fluid mt-2  ml-auto">
            <div className="backImage" >
                
                    <div className="content responsive " style={{backgroundImage:`url(${props.img})`}}>
                        <div className="card-title text-white">
                      <h2>{props.title}</h2>
                        </div>
                        <button className='button'>
                            Shop Now 
                        </button>
                    </div>
                </div>
            </div>
        


    )
}

export default CatogoryItems