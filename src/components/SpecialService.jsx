import React, { useEffect, useState } from "react";
import image3 from '../images/Image3.png'
import FreeDelivery from '../images/FreeDelivery.png'
import specialServiceRow from '../images/specialServiceRow.png'
import { Link, useNavigate } from "react-router-dom";
import line from "../images/Line.png"
import axios from "axios";



export default function SpecialService() {

    const navigate = useNavigate()


    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9000/newProducts")
            .then(res => {
                setProducts(res.data.slice(0, 4))
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            <div className="container">
                <div className="specialService">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="delivery">
                                <img src={FreeDelivery} alt="" />
                            </div>
                            <img src={image3} className='img-fluid p-5' alt="" />
                            <div id="specialServiceRow">
                                <img src={specialServiceRow} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 specialText">
                            <h1>Our Spiceal Service <br /> Fresh Beef</h1>
                            <p><span id="specialLastPrice">$20.00</span> <span>$18.00</span></p>
                            <button className="buyBtn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light bestSelling">
                <div className="container w-50 text-center fw-bold fs-4">
                    <span><img src={line} alt="#" className="line" />Best Selling Product<img src={line} alt="#" className="line" /></span>
                </div>
                <nav className="container text-center types mt-2">
                    <Link to="/fruits">Fruits</Link>
                    <Link to="/vegetables">Vegetable</Link>
                    <Link to="/meal">Meal</Link>
                    <Link to="/drinks">Milk</Link>
                    <Link to="/cakes">Cakes</Link>
                    <Link to="/drinks">Drinks</Link>
                </nav>
                <div className="container mt-2 mb-2">
                    <div className="row">
                        {products.map(elem => (
                            <div className="col-md-3 col-sm-6 mb-3" key={elem.id}>
                                <div className="card productsCard  ">
                                    <img src={elem.image} alt="" onClick={() => navigate("/*")} />
                                    <div className="container text-start m-1">
                                        <div className="mt-1 mb-3">
                                            <p>{elem.title}</p>
                                            <span className="span1">{elem.price1}</span>
                                            <span><b>{elem.price2}</b></span>
                                            <span className="span3">{elem.unity}</span>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}