import React from "react";
import { Link } from "react-router-dom";
import inimg from '../images/in.png'
import insta from '../images/insta.png'
import globus from '../images/globus.png'
import be from '../images/be.png'
import facebook from '../images/facebook.png'
import Payment from '../images/Payment.png'


export default function MyFooter() {
    return (
        <footer className="bg-light">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Link to="/">
                            <span><b className='b1'>SOB</b>
                                <span><b className='b2'>READY</b></span>
                            </span>
                        </Link>
                        <p className="p-2">Sophisticated simplicity for theindependent mind</p>
                        <p className="m-1">
                            <span><img src={facebook} alt="" /></span>
                            <span><img src={inimg} alt="" /></span>
                            <span><img src={insta} alt="" /></span>
                            <span><img src={be} alt="" /></span>
                            <span><img src={globus} alt="" /></span>
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <b>Help & Information</b>
                        <hr />
                        <p><Link to="/*">Pagination</Link></p>
                        <p><Link to="/*">Terms & Conditions</Link></p>
                        <p><Link to="/*">Contact</Link></p>
                        <p><Link to="/*">Home page</Link></p>
                        <p><Link to="/*">Term of use</Link></p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <b>About Us</b>
                        <hr />
                        <p><Link to="/*">Help Center</Link></p>
                        <p><Link to="/*">Address Store</Link></p>
                        <p><Link to="/*">Privacy Policy</Link></p>
                        <p><Link to="/*">Receivers & Amplifiers</Link></p>
                        <p><Link to="/*">Clothings</Link></p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <b>Categories</b>
                        <hr />
                        <p><Link to="/*">DelDelivery</Link></p>
                        <p><Link to="/*">Legal Notice</Link></p>
                        <p><Link to="/*">Documentatio</Link></p>
                        <p><Link to="/*">Secure payment</Link></p>
                        <p><Link to="/*">Stores</Link></p>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-8">© Copyright 2022 | Woodbar By Graphicraz.</div>
                        <div className="col-md-4"><img src={Payment} alt="" /></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

