import React from "react";
import ExteriorBodyWorkFeaturesImage from "../../../resources/images/services/exteriorBodyWork/ExteriorBodyWorkFeatures.jpg";
import ServiceBulletPointImage from "./../../../resources/images/services/BulletPointImage.png";
import Config from "./ExteriorBodyWorkConfig.json";

const ExteriorBodyWorkFeatures = () => {
    return (
        <div className="bg-black flex align-center">
            <div className="max-w-7xl m-auto ">
                <div className="grid lg:grid-cols-2 gap-10 border-0 mx-10 md:mx-20">
                    <div className="overflow-hidden flex justify-center border-[#9b774e] border-2 ">
                        <img
                            src={ExteriorBodyWorkFeaturesImage}
                            className="h-full min-h-500px lg:max-w-xl object-cover m-auto"
                            alt=""
                        ></img>
                        {/* <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-b from-transparent lg:from-30% from-50% to-black lg:to-50% opacity-100"></div> */}
                    </div>
                    <div className="relative min-h-[400px]">
                        <h1 className="text-white font-medium rounded-lg text-xl md:text-3xl my-5 lg:my-0">
                            {Config.Features.Title}
                        </h1>
                        <ul className="ml-6 my-6 space-y-4 text-xl">
                            {Config.Features.Features.map((feature, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center space-x-2"
                                    >
                                        <img
                                            src={ServiceBulletPointImage}
                                            className="w-4 h-4"
                                            alt="Bullet Point"
                                        />
                                        <span className="text-white font-light">
                                            {feature}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            type="button"
                            className="text-white font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] hover:border-white transition ease-linear duration-200"
                        >
                            {Config.Features.Button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExteriorBodyWorkFeatures;
