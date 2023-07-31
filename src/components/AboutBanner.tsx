import React from "react";
import AboutHeroImage from "./../resources/images/AboutHero.png";
import Config from "./AboutConfig.json";

const AboutBanner = () => {
    return (
        <div id="aboutBanner" className="bg-black flex align-center">
            <div className="max-w-7xl m-auto ">
                <div className="grid lg:grid-cols-2 gap-10 border-0 mx-10 sm:mx-10 md:mx-20">
                    <div className="relative min-h-[px]">
                        <h1 className="text-white font-family: Archivo lg text-3xl lg:text-5xl mb-1">
                            {Config.Hero.Title}
                        </h1>

                        {Config.Hero.Text.map((text, idx) => {
                            return (
                                <p
                                    key={idx}
                                    className="text-white font-family: Archivo lg text-xl md:text-xl my-5 lg:my-5"
                                >
                                    {text}
                                </p>
                            );
                        })}

                        <button
                            type="button"
                            className="text-white font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] hover:border-[#9b774e] transition ease-linear duration-200"
                        >
                            OUR SERVICES
                        </button>
                    </div>
                    <div className="flex justify-center ">
                        <img
                            src={AboutHeroImage}
                            className="min-h-full object-cover m-auto xl:ml-10"
                            alt="An industrious employee focused on repairing equipment diligently"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
