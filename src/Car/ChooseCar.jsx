import React, { useState } from 'react'

export default function ChooseCar() {
  let [imgCar, setImgCar] = useState('./img/Car/red-car.jpg')

  const handleChangeColor = (color) => {
    setImgCar(`./img/Car/${color}-car.jpg`)
  }
  return (
    <div className="container">
      <h2 className="text-success display-3">Choose the color of the car</h2>
      <div className="row py-5">
        <div className="col-6">
          <div className="car__img">
            <img src={imgCar} alt={imgCar} style={{width: '100%'}}/>
          </div>
        </div>
        <div className="col-6">
          <div className="list_color h-100 d-flex justify-content-center align-items-center">
            <div className="item mx-3">
              <button className="btn btn-dark" onClick={() => handleChangeColor('black')}>Black</button>
            </div>
            <div className="item mx-3">
              <button className="btn btn-danger" onClick={() => handleChangeColor('red')}>Red</button>
            </div>
            <div className="item mx-3">
              <button className="btn text-white" onClick={() => handleChangeColor('silver')} style={{background: '#afa3a3'}}>Silver</button>
            </div>
            <div className="item mx-3">
              <button className="btn text-white" onClick={() => handleChangeColor('steel')} style={{background: '#4d4d61'}}>Steel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
