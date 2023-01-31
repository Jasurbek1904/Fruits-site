import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import line from '../images/Line.png'
import { API_NEW_PRODUCTS } from "../API";

export default function NewProducts() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(API_NEW_PRODUCTS)
            .then(res => {
                setProducts(res.data.slice(0, 4))
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-light p-5 mb-5">
            <div className="container mt-5">
                <div className="text-center newProducts mt-5">
                    <p>
                        <img src={line} alt="" className="line" />
                        New Products
                        <img src={line} alt="" className="line" />
                    </p>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active p-3 ">
                            <div className="row">
                                {products.map(elem => (
                                    <div className="col-md-3 col-sm-6 mb-3" key={elem.id}>
                                        <div className="card productsCard">
                                            <img src={elem.image} alt="" onClick={() => navigate("/*")} />
                                            <div className="container text-start m-1">
                                                <div className="m-1 mb-3">
                                                    <p>{elem.title}</p>
                                                    <span className="span1">{elem.price1}</span>
                                                    <span><b>{elem.price2}</b></span>
                                                    <span className="span3">{elem.unity}</span>
                                                    <br />
                                                    <button className="p-2 mt-2 btnOrder">Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn-danger " aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn-danger" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>

            </div>
        </div>
    )
}