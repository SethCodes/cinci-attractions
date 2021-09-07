import React from "react";
 
const SingleHeadline = ({url, image, title}) => (
    <a className="col-md-3 mb-3" href={url}>
        <div className="card">
            <img className="img-fluid" src={image} alt=""/>
            <div className="card-body">
                <p className="card-title">{title}</p>
            </div>
        </div>
    </a>
 
);
 
export default SingleHeadline;