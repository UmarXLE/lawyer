import React from 'react';

import Intro from "../../components/Intro/Intro";
import ServicesBlog from "../../shared/feature/ServicesBlog/ServicesBlog";
import AccordionWrapper from "../../components/AccordionWrapper/AccordionWrapper";


const HomePage = () => {
    return (
        <section>
            <Intro />
            <ServicesBlog />
            <AccordionWrapper />
        </section>
    );
};

export default HomePage;