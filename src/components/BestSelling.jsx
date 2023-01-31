import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import line from "../images/Line.png"
import axios from "axios";
export default function BestSelling() {

    const [bestSelling, setBestSelling] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:9000/selling")
            .then(res => {
                setBestSelling(res.data)
                // console.log(res.data);
            })
    }, [])


    return (
        <div className="bg-light bestSelling">
            <div className="container w-50 text-center fw-bold fs-4">
                <span><img src={line} alt="#" className="line" />Best Selling<img src={line} alt="#" className="line" /></span>
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
                    {bestSelling.map(elem => (
                        <div className="col-md-4 mb-2 mt-4">
                            <div className="card bestSellingCard">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 text-center">
                                        <img src={elem.image} alt="" className="w-100 p-2" onClick={() => navigate("/*")} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <b className="m-2">{elem.title}</b>
                                        <br />
                                        <span>{elem.price1}</span>
                                        <span>{elem.price2}</span>
                                        <button type="button" className="buyBtn w-auto">Buy Now</button>
                                        <span>{elem.unity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}