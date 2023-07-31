import React from "react";
import ModificationsHero from "../../components/serviceComponents/modifications/ModificationsHero";
import ModificationsFeatures from "../../components/serviceComponents/modifications/ModificationsFeatures";
import ModificationsFAQ from "../../components/serviceComponents/modifications/ModificationsFAQ";

const Modifications = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <ModificationsHero />
            </div>
            <ModificationsFeatures />
            <ModificationsFAQ />
        </div>
    );
};

export default Modifications;
