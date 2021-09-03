import React from "react";
import '../components/About.css';
import Headlines from '../api/headlines.js'
 
export default function News() {
    return (
        <div className="container-fluid my-5">
            <h3 className="text-center mb-5">
                React Working with Fetch API
            </h3>
            <Headlines/>
        </div>
    );
}