import React from 'react';
import Cont1_desk from '../media/cont1_desk.jpg';
import Cont2a_desk from '../media/cont2a_desk.jpg';
import Cont2b_desk from '../media/cont2b_desk.jpg';
import Cont2c_desk from '../media/cont2c_desk.jpg';
import Cont1_mobile from '../media/cont1_mobile.jpg';
import Cont2a_mobile from '../media/cont2a_mobile.jpg';
import Cont2b_mobile from '../media/cont2b_mobile.jpg';
import Cont2c_mobile from '../media/cont2c_mobile.jpg';
import './About.css';

const About = () => {
    const imageUrl1 = window.innerWidth >= 650 ? desktopImage1 : mobileImage1;
    const imageUrl2 = window.innerWidth >= 650 ? desktopImage2 : mobileImage2;
    const imageUrl3 = window.innerWidth >= 650 ? desktopImage3 : mobileImage3;
    const imageUrl4 = window.innerWidth >= 650 ? desktopImage4 : mobileImage4;
    const imageUrl5 = window.innerWidth >= 650 ? desktopImage5 : mobileImage5;
    return (
        <div className="container">
            <div className="container-1" style={{backgroundImage: `url(${imageUrl1})` }}>
                <img src={Cont1} alt="backImg1" />
                <h4 className="center">About us</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
            </div>
            <div className="container-2" style={{backgroundImage: `url(${imageUrl2})` }}>
                <img src={Cont2a} alt="backImg2a" />
                <h4 className="center">Our mission</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
            </div>
            <div className="container-3" style={{backgroundImage: `url(${imageUrl3})` }}>
                <img src={Cont2b} alt="backImg2b" />
                <h4 className="center">Our Team</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
            </div>
            <div className="container-4" style={{backgroundImage: `url(${imageUrl4})` }}>
                <img src={Cont2c} alt="backImg2c" />
                <h4 className="center">Our Top Picks</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
            </div>
            <div className="container-5" style={{backgroundImage: `url(${imageUrl5})` }}>
                <img src={Cont2a} alt="backImg2a" />
                <h4 className="center">Local articles</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
            </div>
        </div>
    )
}

export default About