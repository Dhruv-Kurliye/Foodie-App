import React from 'react'
import img1 from '../utility/chad-montano-MqT0asuoIcU-unsplash.jpg'
import img2 from '../utility/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg'
import img3 from '../utility/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg'
export default function carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
  <form className="d-flex m-3">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 h-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 h-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 h-25" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
