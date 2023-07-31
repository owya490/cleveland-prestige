import React from "react";
import ExteriorBodyWorkHeroImage from "../../../resources/images/services/exteriorBodyWork/ExteriorBodyWorkHero.png";
import Config from "./ExteriorBodyWorkConfig.json";

const ExteriorBodyWorkHero = () => {
    return (
        <div className="bg-black flex align-center">
            <div className="max-w-7xl m-auto">
                <div className="grid lg:grid-cols-2 gap-5 md:gap-10 border-0 mx-10 md:mx-20">
                    <div className="relative min-h-[400px] order-2">
                        <h1 className="text-white font-medium rounded-lg text-4xl lg:text-6xl my-5 lg:my-0">
                            {Config.Hero.Title}
                        </h1>
                        {Config.Hero.Text.map((text, idx) => {
                            return (
                                <p
                                    key={idx}
                                    className="text-white font-light text-xl md:text-xl my-5 lg:my-7"
                                >
                                    {text}
                                </p>
                            );
                        })}

                        <button
                            type="button"
                            className="text-white font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] hover:border-white transition ease-linear duration-200"
                        >
                            {Config.Hero.Button}
                        </button>
                    </div>
                    <div className="flex justify-center order-1 lg:order-3">
                        <img
                            src={ExteriorBodyWorkHeroImage}
                            className="max-w-full object-cover m-auto xl:ml-10"
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExteriorBodyWorkHero;
