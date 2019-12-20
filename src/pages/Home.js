import React from 'react';
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import {Link} from 'react-router-dom'
import Services from "../components/Services/Services";

const Home = () => {
    return (
       <div>
           <Hero>
               <Banner title={"Homepage"} subtitle={"Homepage Subtitle"}>
                   <Link className={"btn-primary"} to={"/rooms"}> Our Rooms </Link>
               </Banner>
           </Hero>
           <Services/>

       </div>
    );
};

export default Home;