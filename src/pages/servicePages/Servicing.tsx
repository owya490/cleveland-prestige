import React from "react";
import ServicingHero from "../../components/serviceComponents/servicing/ServicingHero";
import ServicingFeatures from "../../components/serviceComponents/servicing/ServicingFeatures";
import ServicingFAQ from "../../components/serviceComponents/servicing/ServicingFAQ";

const Servicing = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <ServicingHero />
            </div>
            <ServicingFeatures />
            <ServicingFAQ />
        </div>
    );
};

export default Servicing;
