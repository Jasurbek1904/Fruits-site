import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ImagesDetails({ api }) {

    const { id } = useParams()

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${api}/${id}`)
            .then(res => {
                setProducts(res.data)
                // console.log(res.data);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="productsCard">
                        <h5>Name : {products.name}</h5>
                        Old price :<span className="span1">${products.price1}.00</span>
                        <p></p>
                        <span><b>New price : ${products.price2}.00</b></span>
                        <br />
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente laboriosam quibusdam ducimus recusandae! Sequi necessitatibus,
                            neque dolor vitae dolore reiciendis eveniet commodi voluptate nihil, quibusdam aspernatur
                            nostrum mollitia, ipsa qui. Cum odit optio possimus voluptate.
                        </small>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={products.image} alt="" className="w-100" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text-start">
                    <button className="btn btn-primary w-50 mt-3 mb-3" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    )
}