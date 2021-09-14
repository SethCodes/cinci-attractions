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
 
    async componentDidMount() {
        const apiUrl = await process.env.HEADLINES_URI ||
            "https://newsapi.org/v2/everything?q=cincinnati&pageSize=8&apiKey=bbac26f2a1734825959bac16ed90df5c";
        await axios.get(apiUrl)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error) => console.log(error))
    }
 
    renderItems() {
        return this.state.news.map((item) => (
            <SingleHeadline key={item.url} item={item}/>
        ));
    }
 
    render() {
        return <div id="rowNews" className="row d-flex">{this.renderItems()}</div>;
    }
}
 
export default Headlines;