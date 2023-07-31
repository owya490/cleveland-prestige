import React from "react";
import DetailingHero from "../../components/serviceComponents/detailing/DetailingHero";
import DetailingFeatures from "../../components/serviceComponents/detailing/DetailingFeatures";
import DetailingFAQ from "../../components/serviceComponents/detailing/DetailingFAQ";

const Detailing = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <DetailingHero />
            </div>
            <DetailingFeatures />
            <DetailingFAQ />
        </div>
    );
};

export default Detailing;
