import React from 'react';

import Intro from "../../components/Intro/Intro";
import ServicesBlog from "../../shared/feature/ServicesBlog/ServicesBlog";
import AccordionWrapper from "../../components/AccordionWrapper/AccordionWrapper";


const HomePage = () => {
    return (
        <section>
            <Intro />
            <section>
                <ServicesBlog />
            </section>
            <AccordionWrapper />
        </section>
    );
};

export default HomePage;