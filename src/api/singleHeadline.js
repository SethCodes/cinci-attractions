import React from "react";
import '../components/About.css';
 
const SingleHeadline = ({item}) => (
    <a className="col-md-3 mb-0" href={item.url}>
        <div className="card">
            <img className="img-fluid" src={item.urlToImage} alt="url-news"/>
            <div className="card-body">
                <p className="card-title">{item.title}</p>
            </div>
        </div>
    </a>
 
);
 
export default SingleHeadline;
