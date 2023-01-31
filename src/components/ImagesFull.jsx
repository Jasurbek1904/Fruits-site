import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ImagesFull({ api, name, link }) {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <div className="container">
            <div className="row">
                <h1>{name}</h1>
                <div className="text-start">
                    <button className="btn btn-primary mb-3 mt-3" style={{ width: "auto" }} onClick={() => navigate(-1)}>Back</button>
                </div>
                {products.map(elem => (
                    <div className="col-md-4 col-sm-6 mb-3" key={elem.id}>
                        <div className="card text-center w-100 h-100 ">
                            <div className="productsCard">
                                <img src={elem.image} alt="" className="p-1" style={{ width: "80%" }} onClick={() => navigate(`/${link}/${elem.id}`)} />
                                <p>{elem.title}</p>
                                <span className="span1">${elem.price1}.00</span>
                                <span><b>${elem.price2}.00</b></span>
                                <p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Sapiente laboriosam quibusdam ducimus recusandae! Sequi necessitatibus,
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}