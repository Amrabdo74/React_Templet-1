import React, { Component } from "react";
import axios from "axios";
import './style.css';

class Portfolio extends Component {
    state ={
        portfolio:[]
    }
    componentDidMount (){
        axios.get("js/data.json").then(res => { this.setState({portfolio:res.data.portfolio })})
    }
    render() {
        const { portfolio } = this.state;

        const portfoliolist = portfolio.map( (portfolioItem) => {
            return(  
                <div className="box" key={portfolioItem.id}>

                <div>
                    <img src={portfolioItem.image} alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>


            </div>
            )

        })
        return (
            <div>
                <div className="portfolio">
                    <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
                    <ul className="portfolio-list">
                        <li className="portfolio-item active">All</li>
                        <li className="portfolio-item">HTML</li>
                        <li className="portfolio-item">Photoshop</li>
                        <li className="portfolio-item">Wordpress</li>
                        <li className="portfolio-item">Mobile</li>
                    </ul>

                   {portfoliolist}

                </div>
            </div>
        )

    }
}
export default Portfolio; 