import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import shopping2 from '../assets/shopping2.png'
import shopping1 from '../assets/shopping1.png'
import shopping5 from '../assets/shopping5rb.png'


import "./Slider.css"
const imgh={
  height:"500px"
}
// D:\mern_ecommerce\src\assets\shopping1-
const Slider = () => {
  return (
    <div className="container-fluid">
 <Carousel slide={true} variant="dark" >
  
      <Carousel.Item >
      <div className="d-flex justify-content-between align-items-center">
          <div className="col-sm-6 ">
            <img
              className="d-block  "
              src={shopping1}
              alt="First slide"
              style={imgh}
            />
          </div>
          <div className="col-sm-6">
            <h1 className='mb-4'>LOUNGEWEAR <br/> LOVE</h1>
            <p className='lead mb-4   '>You fight like a younger man, there’s nothing held back.<br/> It’s admirable, but mistaken</p>
            <button className='px-3 py-2 btn btn-success btn-block rounded-0'> Submit here</button>
          </div>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-between align-items-center">
          <div className="col-sm-6 ">
            <img
              className="d-block  "
              src={shopping2}
              alt="First slide"
              style={imgh}
            />
          </div>
          <div className="col-sm-6">
            <h1 className="mb-4">OUR SUMMER <br/>SALES</h1>
            <p className='lead mb-4'>Dramatically visualize customer directed convergence<br/> without revolutionary ROI.</p>
            <button className='px-3 py-2 btn btn-success btn-block rounded-0'> Submit here</button>
          </div>

        </div>


      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-sm-6 ">
            <img
              className="d-block"
              src={shopping5}
              alt="First slide"
              style={imgh}
            />
          </div>
          <div className="col-sm-6">
            <h1 className='mb-4'>AUTUMN <br/> COLLECTION</h1>
            <p className='lead mb-4 '>   Collaboratively and  administrate empowered markets via <br/> plug-and-play networks</p>
            <button className='px-3 py-2 btn btn-success btn-block rounded-0'> Submit here</button>
          </div>

        </div>


      </Carousel.Item>
    </Carousel>
    </div>
   
  )
}

export default Slider