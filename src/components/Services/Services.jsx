import React from 'react'
import './services.css'
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Services() {
    return (
        <>
            <div className="serviveContainer">
                <p id='HeadText'>OUR SERVICES</p>
                <div className="card-wrap" >
                <MDBIcon fas icon="tachometer-alt" id="IconStyle"/>
                    <div className="card-text" >Digital
                        Transformation</div>
                    <p className="card-subtext" >Still stuck in the paper age? RPA, AI, AR/VR, Cloud, IoT – do not let these jargons worry you. Digital transformation is not always complex and expensive. From eliminating the overheads, optimizing the processes and automation, there are quick easy wins which our professionals can help you find. Right from building the transformation strategy to transforming your business, we will travel with you - all the way. </p>

                </div>
                <div className="card-wrap" >
                    <MDBIcon fas icon="globe-africa" id="IconStyle"/>
                    <div className="card-text" >Digital
                        Marketing</div>
                    <p className="card-subtext" >Reach your target customers faster with our curated Digital Marketing solutions. We believe that not one size fits all. Our digital marketing professionals will help you build a brand strategy – one that is specific to your product or business. Be it SEO, Email/Social Media Marketing, Google Ads, or traditional channels, you can count on us for the best campaigns. </p>
                </div>
                <div className="card-wrap" >
                    {/* <StayCurrentPortraitIcon id="IconStyle" /> */}
                    <MDBIcon fas icon="mobile-alt" id="IconStyle"/>
                    <div className="card-text" >Digital
                        Mobile App Development</div>
                    <p className="card-subtext">Android or IOS, we will put your solution in the palms of your customers. Right from conceptualization to productionizing, you can rely on us to provide you and your customers with best in-app experiences.<br />
                        Flutter,Swift,Kotlin,Java - there is nothing that is not doable.</p>
                </div>
                <div className="card-wrap" >
                 
                    <MDBIcon fas icon="globe-africa" id="IconStyle"/>
                    <div className="card-text" >Web Development</div>
                    <p className="card-subtext">First impression is the best impression. And in this digital age, websites are your face. Make the right impression with beautiful designs and engaging content. Be it just landing page or a complex web application, we can help you build it, maintain it and market it. </p>
                </div>
            </div>
        </>
    )
}
