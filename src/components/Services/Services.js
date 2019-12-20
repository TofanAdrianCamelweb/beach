import React, {Component} from 'react';
import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from "react-icons/all";
import Title from "./Title";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state={
            services:[
                {
                    icon: <FaCocktail/>,
                    title: "free Coctails",
                    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada.",
                },
                {
                    icon: <FaHiking/>,
                    title: "free Hiking",
                    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada.",
                },
                {
                    icon: <FaShuttleVan/>,
                    title: "free Vans",
                    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuadas",
                },
                {
                    icon: <FaBeer/>,
                    title: "free Beer",
                    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada.",
                }
            ]
        };

    }
    render() {
        return (
            <section>
                <Title title={"services"}/>
                <div className={'services-center'}>
                    {this.state.services.map((item,key)=> {
                        return (
                        <article key={key} className={'service'}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    })}
                </div>
            </section>

        );
    }
}

export default Services;