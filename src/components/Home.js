import React from 'react'
import AttractionCard from './AttractionCard';
import RedImg from '../images/img.png';
import PurpleImg from '../images/Image-2.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import images from '../images/carousel11.jpg'
import image2 from '../images/carousel12.jpg'
import image3 from '../images/carousel13.jpg'
import image4 from '../images/carousel14.jpg'



const Home = () => {
    const date = new Date();
    const day = date.getFullYear();


    const articles = [
        {
          id: 1,
          backgroundImg: RedImg, 
          category: "Sports",
          date: day,
          title: "Big Bad Ball",
          snippet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolor saepe quasi eaque tempora sint "
        },
        {
          id: 2,
          backgroundImg: PurpleImg,
          category: "Sports",
          date: day,
          title: "Big Bad Ball",
          snippet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolor saepe quasi eaque tempora sint "
        },
        {
          id: 3,
          category: "Sports",
          backgroundImg: PurpleImg,
          date: day,
          title: "Big Bad Ball",
          snippet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolor saepe quasi eaque tempora sint "
        }
    ]



    return (
        <div className="container-fluid">
        <div className="carouselDown">
           <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={images} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
    </AliceCarousel>
        </div>
        
        <div className="container-fluid">
        <div className="row">
        {articles.map((attraction) => {
            return(
            <div className="col-md-6 col-sm-12" key={attraction.id} style={{ backgroundImage: `url("${attraction.backgroundImg}")` }}>
                <AttractionCard
                id={attraction.id}
                category={attraction.category}
                date={attraction.date}
                title={attraction.title}
                snippet={attraction.snippet}
                 />
            </div>
            )
        })}
        </div>
            
        </div>
         </div>
    )
}

export default Home
