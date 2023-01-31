import React from "react";
import sushi from '../images/sushi.png'

export default function MyCarusel() {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active p-3 ">
                        <div className="row caruselBg">
                            <div className="col-md-6">
                                <h1>All You Need For <br /> Perfect Breakfast</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque beatae officia iure iusto, placeat <br /> cumque enim fuga laborum dicta optio.</p>
                                <button className="buyBtn">BUY NOW</button>
                                <button className="seeBtn">SEE MORE</button>
                            </div>
                            <div className="col-md-6">
                                <img src={sushi} className="img-fluid sushiImg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item p-3">
                        <div className="row caruselBg">
                            <div className="col-md-6">
                                <h1>All You Need For <br /> Perfect Breakfast</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque beatae officia iure iusto, placeat <br /> cumque enim fuga laborum dicta optio.</p>
                                <button className="buyBtn">BUY NOW</button>
                                <button className="seeBtn">SEE MORE</button>
                            </div>
                            <div className="col-md-6">
                                <img src={sushi} className="img-fluid sushiImg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item p-3">
                        <div className="row caruselBg">
                            <div className="col-md-6">
                                <h1>All You Need For <br /> Perfect Breakfast</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque beatae officia iure iusto, placeat <br /> cumque enim fuga laborum dicta optio.</p>
                                <button className="buyBtn">BUY NOW</button>
                                <button className="seeBtn">SEE MORE</button>
                            </div>
                            <div className="col-md-6">
                                <img src={sushi} className="img-fluid sushiImg" alt="..." />
                            </div>
                        </div >
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon btn-danger " aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon btn-danger" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}