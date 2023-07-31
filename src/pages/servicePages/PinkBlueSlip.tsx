import React from "react";
import PinkBlueSlipHero from "../../components/serviceComponents/pinkBlueSlip/PinkBlueSlipHero";
import PinkBlueSlipFeatures from "../../components/serviceComponents/pinkBlueSlip/PinkBlueSlipFeatures";
import PinkBlueSlipFAQ from "../../components/serviceComponents/pinkBlueSlip/PinkBlueSlipFAQ";

const PinkBlueSlip = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <PinkBlueSlipHero />
            </div>
            <PinkBlueSlipFeatures />
            <PinkBlueSlipFAQ />
        </div>
    );
};

export default PinkBlueSlip;
