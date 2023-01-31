import React from "react";
import appstore from '../images/appstore.png'
import googleplay from '../images/googleplay.png'
import appScreen from '../images/screen.png'

export default function AppScreen() {
    return (
        <div className="container mb-5 fresh">
            <div className="row">
                <div className="col-md-6 appScreenCol">
                    <div className="card">
                        <h3 className="fw-bold">Make your online shop sob ready with our mobile all</h3>
                        <p className="freshFoodp">There are many variations of passage Lorem Ipsum available, <br />
                            but te majority hav suffered alteration in some form, by injected humour
                        </p>
                        <div className="row ">
                            <div className="col-md-6">
                                <img src={appstore} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src={googleplay} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="freshFoodcard card">
                        <img src={appScreen} className="freshFood" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}