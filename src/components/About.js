import React, { useState, useEffect } from 'react';
import './About.css';
import Cont1_desk from '../media/cont1_desk.jpg';
import Cont1_mobile from '../media/cont1_mobile.jpg';
import Image1 from '../media/image1.jpg'
import Image2 from '../media/image2.jpg'
import Image3 from '../media/image3.jpg'


const About = () => {
    const imageUrl1 = useWindowWidth() >= 650 ? Cont1_desk  : Cont1_mobile;
    // {const imageUrl2 = useWindowWidth() >= 650 ? Cont2_desk  : Cont2_mobile;
    // const imageUrl3 = useWindowWidth() >= 650 ? Cont3_desk  : Cont3_mobile;
    // const imageUrl4 = useWindowWidth() >= 650 ? Cont4_desk  : Cont4_mobile;
    // const imageUrl5 = useWindowWidth() >= 650 ? Cont5_desk  : Cont5_mobile;}
    return (
        <div className="container" >
            <div className="container-1" style={{backgroundImage: `url(${imageUrl1})` }}>
                <div className="content1">
                    <h4 className="center">About us</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
            </div>
            <div className="container-2" >
                <div className="container" id="content2">
                    <div className="container" id="content2a">
                        <h4 className="center">Our mission</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                    </div>
                    <div className="container" id="content2b">
                        <div id="imgRow">
                            <img id="img1" src={Image1} alt="neon-lights1" />
                            <img id="img2" src={Image2} alt="neon-lights2" />
                        </div>
                        <img id="img3" src={Image3} alt="neon-lights3" />
                    </div>
                </div>
            </div>
            <div className="container-3" >
                <div className="content3">
                    <h4 className="center">Our Team</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
            </div>
            <div className="container-4" >
                <div className="content4">
                    <h4 className="center">Our Top Picks</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
            </div>
            <div className="container-5" >
                <div className="content5">
                    <h4 className="center">Local articles</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
            </div>
        </div>
    )
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default About