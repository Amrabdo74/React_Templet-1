import React, { Component } from "react";
import axios from "axios";
import './style.css'
class Work extends Component{
    state = {
        works: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ works: res.data.works }) })
    }
    render() {
        const { works } = this.state;

        const worklist = works.map( (WorkItem) => {
            return(  
                    <div id={WorkItem.first} className="part first"  key={WorkItem.id}>
                        <i className={WorkItem.icon_name}></i>
                        <h4 className="part-title">{WorkItem.titel}</h4>
                        <hr className="line"/>
                        <p className="part-desc">
                            {WorkItem.body}
                       </p>
                    </div>
            )

        })
        return(
            <div className="work" > 
            <h2 className="work-title"><span>My</span> Work</h2>
            <div className="container">
             
                {worklist}
            </div>
        </div>
        )

    }
}
export default Work;