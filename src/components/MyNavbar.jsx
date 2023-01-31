import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    NavLink,
} from 'reactstrap';

function MyNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className='container'>
                <Navbar {...args} expand="lg">
                    <NavbarBrand className='myNavbarBrand'>
                        <Link to="/">
                            <span><b className='b1'>SOB</b>
                                <span><b className='b2'>READY</b></span>
                            </span>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto mynav mt-1" navbar>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/">Home +</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/*">Category</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/*">Shop</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/*">Blog</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/*">Page</Link>
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <NavbarText className='mt-1'>
                            <input type="search" placeholder='Search...' className='mysearch' />
                            <button className='searchSvg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 17" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.38357 1.45714C4.69406 1.45714 1.70313 4.38501 1.70313 7.99671C1.70313 11.6084 4.69406 14.5363 8.38357 14.5363C12.0731 14.5363 15.064 11.6084 15.064 7.99671C15.064 4.38501 12.0731 1.45714 8.38357 1.45714ZM0.2146 7.99671C0.2146 3.58025 3.87197 0 8.38357 0C12.8952 0 16.5525 3.58025 16.5525 7.99671C16.5525 10.0386 15.7708 11.9017 14.4843 13.3149L16.9841 15.7556C17.2751 16.0397 17.2757 16.501 16.9855 16.7859C16.6952 17.0708 16.2239 17.0714 15.9329 16.7873L13.3967 14.311C12.0128 15.3654 10.2731 15.9934 8.38357 15.9934C3.87197 15.9934 0.2146 12.4132 0.2146 7.99671Z" fill="white" />
                                </svg>
                            </button>
                        </NavbarText>
                        <NavbarText className='mt-1'>
                            <button className='icons m-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 22" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.65986 14.617C4.61703 14.617 1.16455 15.2524 1.16455 17.7971C1.16455 20.3418 4.59513 21 8.65986 21C12.7027 21 16.1542 20.3636 16.1542 17.8199C16.1542 15.2762 12.7246 14.617 8.65986 14.617Z" stroke="#E21A43" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.65986 10.9874C11.3129 10.9874 13.4633 8.7511 13.4633 5.9932C13.4633 3.2353 11.3129 1 8.65986 1C6.00679 1 3.85546 3.2353 3.85546 5.9932C3.8465 8.74178 5.98289 10.9781 8.62601 10.9874H8.65986Z" stroke="#E21A43" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </NavbarText>
                        <NavbarText className='mt-1'>
                            <button className='icons m-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.11816 1L3.36525 1.39908L4.40561 14.1175C4.4888 15.1562 5.3347 15.9532 6.35021 15.9499H18.1355C19.1046 15.9521 19.9267 15.2205 20.0639 14.2361L21.0892 6.96621C21.2037 6.15365 20.6538 5.39983 19.863 5.28233C19.7938 5.27235 3.72608 5.26681 3.72608 5.26681" fill="#E21A43" fillOpacity="0.1" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4069 9.36389H16.4027H13.4069Z" fill="#E21A43" fillOpacity="0.1" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.87627 19.7928C6.20145 19.7928 6.46397 20.0633 6.46397 20.3958C6.46397 20.7295 6.20145 21 5.87627 21C5.55109 21 5.28857 20.7295 5.28857 20.3958C5.28857 20.0633 5.55109 19.7928 5.87627 19.7928Z" fill="#E21A43" fillOpacity="0.1" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.0627 19.7928C18.3879 19.7928 18.6515 20.0633 18.6515 20.3958C18.6515 20.7295 18.3879 21 18.0627 21C17.7375 21 17.475 20.7295 17.475 20.3958C17.475 20.0633 17.7375 19.7928 18.0627 19.7928Z" fill="#E21A43" fillOpacity="0.1" />
                                    <path d="M1.11816 1L3.36525 1.39908L4.40561 14.1175C4.4888 15.1562 5.3347 15.9532 6.35021 15.9499H18.1355C19.1046 15.9521 19.9267 15.2205 20.0639 14.2361L21.0892 6.96621C21.2037 6.15364 20.6538 5.39983 19.863 5.28233C19.7938 5.27235 3.72608 5.26681 3.72608 5.26681M13.4069 9.36389H16.4027M5.87627 19.7928C6.20145 19.7928 6.46397 20.0633 6.46397 20.3958C6.46397 20.7295 6.20145 21 5.87627 21C5.55109 21 5.28857 20.7295 5.28857 20.3958C5.28857 20.0633 5.55109 19.7928 5.87627 19.7928ZM18.0627 19.7928C18.3879 19.7928 18.6515 20.0633 18.6515 20.3958C18.6515 20.7295 18.3879 21 18.0627 21C17.7375 21 17.475 20.7295 17.475 20.3958C17.475 20.0633 17.7375 19.7928 18.0627 19.7928Z" stroke="#E21A43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </NavbarText>


                    </Collapse>
                </Navbar>
            </div>
            <hr />
        </>
    );
}

export default MyNavbar;