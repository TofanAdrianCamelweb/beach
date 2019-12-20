import React from 'react';
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title={"404 Not Found"} subtitle={"sorry page is not found"}>
                    <Link to={"/"} className={"btn btn-primary"}>Go to Homepage</Link>
                </Banner>
            </Hero>
        </div>
    );
};

export default Error;