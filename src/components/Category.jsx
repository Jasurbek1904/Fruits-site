import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Category() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/categories")
            .then(res => {
                setCategories(res.data)
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="categoriesAll">
            <div className="container categories">
                <div className="row bg-white">
                    {categories.map(elem => (
                        <div className="col text-center" key={elem.id}>
                            <div className="card h-100">
                                <img src={elem.image} alt="" className="img-fluid  mx-auto mt-4" />
                                <p className="mt-2 mb-4">{elem.name}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}