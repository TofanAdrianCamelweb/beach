import React from 'react';
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import {Link} from "react-router-dom";

const Rooms = () => {
    return (
        <div>
            <Hero hero={'roomsHero'} >
                <Banner title={"Our rooms"} subtitle={"Take a look :)"}>
                    <Link to={"/"} className={"btn-primary"}>Back To Homepage</Link>
                </Banner>
            </Hero>
        </div>
    );
};

export default Rooms;