import React from "react";
import ModificationsFeaturesImage from "../../../resources/images/services/modifications/ModificationsFeatures.png";
import ServiceBulletPointImage from "./../../../resources/images/services/BulletPointImage.png";
import Config from "./ModificationsConfig.json";
import { motion } from "framer-motion";
import { MotionFade } from "../../../services/animations";

const ModificationsFeatures = () => {
    const FeaturesImg = (
        <div className="overflow-hidden flex justify-center border-[#9b774e] border-2 ">
            <img
                src={ModificationsFeaturesImage}
                className="h-full min-h-500px lg:max-w-xl object-cover m-auto"
                alt=""
            ></img>
        </div>
    );

    const FeaturesTitle = (
        <h1 className="text-white font-medium rounded-lg text-xl md:text-3xl my-5 lg:my-0">
            {Config.Features.Title}
        </h1>
    );

    const FeaturesPoints = () => (
        <ul className="ml-6 my-6 space-y-4 text-xl">
            {Config.Features.Features.map((feature, index) => {
                return (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
                        key={index}
                    >
                        <li className="flex items-center space-x-2">
                            <img
                                src={ServiceBulletPointImage}
                                className="w-4 h-4"
                                alt="Bullet Point"
                            />
                            <span className="text-white font-light">
                                {feature}
                            </span>
                        </li>
                    </motion.div>
                );
            })}
        </ul>
    );

    const FeaturesButton = (
        <button
            type="button"
            className="text-white font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] hover:border-white transition ease-linear duration-200"
        >
            {Config.Features.Button}
        </button>
    );

    return (
        <div className="bg-black flex align-center">
            <div className="max-w-7xl m-auto ">
                <div className="grid lg:grid-cols-2 gap-10 border-0 mx-10 md:mx-20">
                    <MotionFade customDiv={FeaturesImg} delay={0.6} x={0} />
                    <div className="relative min-h-[400px]">
                        <MotionFade
                            customDiv={FeaturesTitle}
                            delay={0.4}
                            x={-100}
                        />
                        <FeaturesPoints />
                        <MotionFade
                            customDiv={FeaturesButton}
                            delay={1}
                            x={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModificationsFeatures;
