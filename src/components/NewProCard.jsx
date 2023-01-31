import React from "react";


export default function NewProCard(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.img} alt="" />
                    <p>{props.title}</p>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}