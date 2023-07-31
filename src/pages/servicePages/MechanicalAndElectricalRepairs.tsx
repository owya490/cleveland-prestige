import React from "react";
import MechanicalAndElectricalRepairsFeatures from "../../components/serviceComponents/mechanicalAndElectricalRepairs/MechanicalAndElectricalRepairsFeatures";
import MechanicalAndElectricalRepairsHero from "../../components/serviceComponents/mechanicalAndElectricalRepairs/MechanicalAndElectricalRepairsHero";
import MechanicalAndElectricalRepairsFAQ from "../../components/serviceComponents/mechanicalAndElectricalRepairs/MechanicalAndElectricalRepairsFAQ";

const MechanicalAndElectricalRepairs = () => {
    return (
        <div className="space-y-20">
            <div className="pt-20 md:pt-24 lg:pt-32">
                <MechanicalAndElectricalRepairsHero />
            </div>
            <MechanicalAndElectricalRepairsFeatures />
            <MechanicalAndElectricalRepairsFAQ />
        </div>
    );
};

export default MechanicalAndElectricalRepairs;
