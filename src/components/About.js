import React, { useState, useEffect } from 'react';
import './About.css';
import Cont1_desk from '../media/cont1_desk.jpg';
import Cont1_mobile from '../media/cont1_mobile.jpg';
import Image1 from '../media/image1.jpg'
import Image2 from '../media/image2.jpg'
import Image3 from '../media/image3.jpg'
import TeamGEC from '../media/teamGEC.jpg'
import LinkedIn from '../media/linkedIn.png'
import Twitter from '../media/twitter.png'
import Github from '../media/github.png'
import ToPick1 from '../media/toPick1.jpg'
import ToPick2 from '../media/toPick2.jpg'
import ToPick3 from '../media/toPick3.jpg'
import ToPick4 from '../media/toPick4.jpg'
import ToPick5 from '../media/toPick5.jpg'
import ToPick6 from '../media/toPick6.jpg'
import ToPick7 from '../media/toPick7.jpg'
import Headlines from '../api/headlines';

const About = () => {

    const imageUrl1 = useWindowWidth() >= 650 ? Cont1_desk  : Cont1_mobile;

    return (
        <div className="container" id="container" >

            {/* container 1 - about us */}

            <div className="container-1" style={{backgroundImage: `url(${imageUrl1})` }}>
                <div className="content1">
                    <h4 className="center">About us</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
            </div>

            {/* container 2 - our mission */}

            <div className="container-2" >
                <div className="row" id="content2">
                    <div className="col col-sm-3 col-md-4 col-lg-4" id="content2a">
                        <h4 className="center">Our mission</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                    </div>
                    <div className="col col-sm-3 col-md-4 col-lg-4" id="content2b">
                        <div id="imgRow">
                            <img id="img1" src={Image1} alt="neon-lights1" />
                            <img id="img2" src={Image2} alt="neon-lights2" />
                        </div>
                        <div id="imgRow2">
                            <img id="img3" src={Image3} alt="neon-lights3" />
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* container 3 - our team */}

            <div className="container-3" >
                <div className="row" id="content3" >
                    <h4 className="center" id="cont3h4">Our Team</h4>
                    <p id="p3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
                <div id="team" className= "row">
                    <div className="col-md-3 col-sm-12  center" id="teaMember">
                        <img src={TeamGEC} alt="GEC" id="teamPic"/>
                        <h5>Seth Stephens</h5>
                        <a href="#"><img src={LinkedIn} alt="linkedIn" id="teamSocial"/></a>
                        <a href="#"><img src={Twitter} alt="twitter" id="teamSocial"/></a>
                        <a href="#"><img src={Github} alt="github" id="teamSocial"/></a>
                    </div>
                    <div className="col-md-3 col-sm-12  center" id="teaMember">
                        <img src={TeamGEC} alt="GEC" id="teamPic"/>
                        <h5>Guillermo Cabral</h5>
                        <a href="#"><img src={LinkedIn} alt="linkedIn" id="teamSocial"/></a>
                        <a href="#"><img src={Twitter} alt="twitter" id="teamSocial"/></a>
                        <a href="#"><img src={Github} alt="github" id="teamSocial"/></a>
                    </div>
                    <div className="col-md-3 col-sm-12  center" id="teaMember">
                        <img src={TeamGEC} alt="GEC" id="teamPic"/>
                        <h5>Todd Cunningham</h5>
                        <a href="#"><img src={LinkedIn} alt="linkedIn" id="teamSocial"/></a>
                        <a href="#"><img src={Twitter} alt="twitter" id="teamSocial"/></a>
                        <a href="#"><img src={Github} alt="github" id="teamSocial"/></a>
                    </div>
                    <div className="col-md-3 col-sm-12  center" id="teaMember">
                        <img src={TeamGEC} alt="GEC" id="teamPic"/>
                        <h5>Kushal Patel</h5>
                        <a href="#"><img src={LinkedIn} alt="linkedIn" id="teamSocial"/></a>
                        <a href="#"><img src={Twitter} alt="twitter" id="teamSocial"/></a>
                        <a href="#"><img src={Github} alt="github" id="teamSocial"/></a>
                    </div>
                </div>
                <div id="buttonTeam">
                    <a href="#" class="button">
		                <div class="part-text">
			                <span class="label">View the team</span>
		                </div>
                    </a>
                </div>
            </div>

            {/* container 4 - our top picks */}

            <div className="container-4" >
                <div className="" id="content4">
                    <h4 className="center" id="cont4h4">Our Top Picks</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
                <div className= "container">
                    <div class="gallery">
                        <div class="gallery__item gallery__item--1">
                            <img src={ToPick1} class="gallery__img" alt="Image 1"/>
                        </div>
                        <div class="gallery__item gallery__item--2">
                            <img src={ToPick2} class="gallery__img" alt="Image 2"/>
                        </div>
                        <div class="gallery__item gallery__item--3">
                            <img src={ToPick3} class="gallery__img" alt="Image 3"/>
                        </div>
                        <div class="gallery__item gallery__item--4">
                            <img src={ToPick4} class="gallery__img" alt="Image 4"/>
                        </div>
                        <div class="gallery__item gallery__item--5">
                            <img src={ToPick5} class="gallery__img" alt="Image 5"/>
                        </div>
                        <div class="gallery__item gallery__item--6">
                            <img src={ToPick6} class="gallery__img" alt="Image 6"/>
                        </div>
                        <div class="gallery__item gallery__item--7">
                            <img src={ToPick7} class="gallery__img" alt="Image 7"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* container 5 - local articles */}

            <div className="container-5" >
                <div className="content5">
                    <h4 className="center">Local articles</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi, vitae vero neque quis facere omnis, quibusdam est, delectus provident amet!</p>
                </div>
                <div>
                     <Headlines />
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