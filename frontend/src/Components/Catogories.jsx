import React from 'react'
import card1 from '../assets/card1rb.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shirt1 from "../assets/shirt1.png"
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";


import CatogoryItems from './CatogoryItems';
const Cdata = [
    {
        id: 1,
        img:shirt1,
        title:"SHIRT STYLE",
    },
    {
        id: 2,
        img:shirt2,

        title:"LOUNGEWEAR LOVE"
    },

    {
        id: 3,
        img:shirt3,

        title:"LIGHT JACKETS"
    }
]
const Catogories = () => {
  return (

    <div className='container-fluid'>
         <Row className='mb-2 text-center d-flex justify-content-center'  xs={1} md={1} lg={3} sm={1}>
         {
        Cdata.map((val)=>{
            return(
<CatogoryItems
// img={val.img}
key={val.id}
title={val.title}
para={val.para}
img={val.img}
/>
            );

        })}
         </Row>
    
       
    </div>
  )
}

export default Catogories