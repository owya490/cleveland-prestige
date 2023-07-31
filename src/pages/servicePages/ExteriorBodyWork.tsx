import React from "react";
import ExteriorBodyWorkHero from "../../components/serviceComponents/exteriorBodyWork/ExteriorBodyWorkHero";
import ExteriorBodyWorkFeatures from "../../components/serviceComponents/exteriorBodyWork/ExteriorBodyWorkFeatures";
import ExteriorBodyWorkFAQ from "../../components/serviceComponents/exteriorBodyWork/ExteriorBodyWorkFAQ";

const ExteriorBodyWork = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <ExteriorBodyWorkHero />
            </div>
            <ExteriorBodyWorkFeatures />
            <ExteriorBodyWorkFAQ />
        </div>
    );
};

export default ExteriorBodyWork;
