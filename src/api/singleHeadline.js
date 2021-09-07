import React from "react";
import '../components/About.css';
 
const SingleHeadline = ({item}) => (
    <a id="column" className="col-md-3 col-sm-6" href={item.url}>
        <div className="card text-center">
            <img className="img-fluid text-center" src={item.urlToImage} alt="url-news"/>
            <div className="card-body">
                <p className="card-title">{item.title}</p>
            </div>
        </div>
    </a>
 
);
 
export default SingleHeadline;
