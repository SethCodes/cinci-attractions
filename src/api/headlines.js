import React, {Component} from "react";
import SingleHeadline from "./singleHeadline";
import axios from 'axios';
 
class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
 
    componentDidMount() {
        const apiUrl =
            "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=63776d05d7374eea9f0e441a573b30a8";
 
        axios.get(apiUrl)
            .then((response) => {
                this.setState({
                    news: [[response.data.articles][response.data.title]]
                })
                console.log([[response.data.articles][response.data.title]]);
            })
            .catch((error) => console.log(error))
    }
 
    renderItems() {
        return this.state.news.map((item) => (
            <SingleHeadline key={item.url} item={item}/>
        ));
        
    }
 
 
    render() {
        return <div className="row">{this.renderItems()}</div>;
    }
}
 
export default Headlines;