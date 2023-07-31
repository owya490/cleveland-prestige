import React from "react";
import ModificationsHeroImage from "../../../resources/images/services/modifications/ModificationsHero.png";
import Config from "./ModificationsConfig.json";
import { MotionFade } from "../../../services/animations";

const ModificationsHero = () => {
    const HeroTitle = (
        <h1 className="text-white font-medium rounded-lg text-4xl lg:text-6xl my-5 lg:my-0">
            {Config.Hero.Title}
        </h1>
    );

    const HeroText = Config.Hero.Text.map((text, idx) => {
        return (
            <p
                key={idx}
                className="text-white font-light text-xl md:text-xl my-5 lg:my-7"
            >
                {text}
            </p>
        );
    });

    const HeroButton = (
        <button
            type="button"
            className="text-white font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] hover:border-white transition ease-linear duration-200"
        >
            {Config.Hero.Button}
        </button>
    );

    const HeroImg = (
        <img
            src={ModificationsHeroImage}
            className="max-w-full object-cover m-auto xl:ml-10"
            alt=""
        ></img>
    );

    return (
        <div className="bg-black flex align-center">
            <div className="max-w-7xl m-auto">
                <div className="grid lg:grid-cols-2 gap-5 md:gap-10 border-0 mx-10 md:mx-20">
                    <div className="relative min-h-[400px] order-2">
                        <MotionFade customDiv={HeroTitle} delay={0} x={-100} />
                        <MotionFade customDiv={HeroText} delay={0.2} x={-100} />
                        <MotionFade customDiv={HeroButton} delay={0.6} x={0} />
                    </div>
                    <div className="flex justify-center order-1 lg:order-3">
                        <MotionFade customDiv={HeroImg} delay={0.4} x={0} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModificationsHero;
