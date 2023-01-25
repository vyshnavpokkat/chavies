import React from 'react'
import './banner.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Banner() {
    return (
        <>
            <div className="BannerMainContainer">
                <div className="leftAdd">
                    <div className="caroContent">
                        <MDBCarousel>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src='/creativity.svg'
                                alt='...'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src='/target.svg'
                                alt='...'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src='/realtime.svg'
                                alt='...'
                            >
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </div>
                </div>
                <div className="rightAdd">
                    <h1 className='MainTXT'>SMART MOVES</h1>
                    <h1 className='MainTXT'>SMART PEOPLE</h1>
                    <h1 className='MainTXT'>SMART SOLUTIONS</h1>
                    <h4 id='subTXT'>At Chaavie, our focus is always the success of our customer. With Digital being the new buzz and the way of business, we can help you navigate the digital cross winds and chart your way to success. Our way of business is built on trust, innovation and delivering the best value to our customers.</h4>
                    <button className="button">Get Started</button>
                </div>
            </div>
        </>
    )
}
