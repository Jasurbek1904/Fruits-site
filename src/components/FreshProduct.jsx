import React from "react";
import FreshFood from "../images/FreshFood.png"
import verification from '../images/verification.png'


export default function FreshProduct() {
    return (
        <div className="container mb-5 fresh">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="freshFoodcard card">
                        <img src={FreshFood} className="freshFood" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <h3 className="fw-bold">Fresh Product Directly <br /><br /> To Your Door With Free <br /><br /> Delivery</h3>
                        <p className="freshFoodp">There are many variations of passage Lorem Ipsum available, <br />
                            but te majority hav suffered alteration in some form, by injected humour
                        </p>
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    <span>
                                        <img src={verification} alt="" />
                                        <label className="form-check-label m-2">
                                            Free Delivery For All Order
                                        </label>
                                    </span>
                                    <span className="m-5">
                                        <img src={verification} alt="" />
                                        <label className="form-check-label m-2">
                                            Only Fresh Food
                                        </label>
                                    </span>
                                </p>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btnFind">Find Now</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}