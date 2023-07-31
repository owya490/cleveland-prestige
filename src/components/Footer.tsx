import React, { ReactNode } from "react";
import logo from "./../resources/TextLogo.png";
import FooterFbSvg from "../elements/svgs/FooterFbSvg";
import FooterIgSvg from "../elements/svgs/FooterIgSvg";
import FooterTwSvg from "../elements/svgs/FooterTwSvg";
import Config from "./FooterConfig.json";

import { motion } from "framer-motion";

interface IMotionDivProps {
    customDiv: ReactNode;
    delay: number;
}

const FooterContentMotionDiv = ({ customDiv, delay }: IMotionDivProps) => {
    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "250px", once: true }}
            transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1],
                delay: delay,
            }}
        >
            {customDiv}
        </motion.div>
    );
};

const Footer = () => {
    const addressDiv = (
        <p className="text-sm block md:text-lg lg:text-lg max-w-xs text-white">
            {Config.Address[0]}
            <br />
            {Config.Address[1]}
        </p>
    );

    const phoneEmailDiv = (
        <div>
            <a href="/" className="transition hover:opacity-75">
                <p className="text-sm block md:text-lg lg:text-lg mt-5 max-w-xs text-white">
                    {Config.Phone}
                </p>
            </a>

            <a href="/" className="transition hover:opacity-75">
                <p className="text-sm block md:text-lg lg:text-lg max-w-xs text-white">
                    {Config.Email}
                </p>
            </a>
        </div>
    );

    const facebookIconDiv = (
        <div>
            <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
            >
                <FooterFbSvg></FooterFbSvg>
            </a>
        </div>
    );

    const instagramIconDiv = (
        <div>
            <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
            >
                <FooterIgSvg></FooterIgSvg>
            </a>
        </div>
    );

    const twitterIconDiv = (
        <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-200 transition hover:opacity-75"
        >
            <FooterTwSvg></FooterTwSvg>
        </a>
    );

    const homeDiv = (
        <div>
            <a href="/" className="text-gray-200 transition hover:opacity-75">
                Home
            </a>
        </div>
    );

    const aboutDiv = (
        <div>
            <a href="/" className="text-gray-200 transition hover:opacity-75">
                About
            </a>
        </div>
    );

    const servicesDiv = (
        <div>
            <a href="/" className="text-gray-200 transition hover:opacity-75">
                Services
            </a>
        </div>
    );

    const reviewsDiv = (
        <div>
            <a href="/" className="text-gray-200 transition hover:opacity-75">
                Reviews
            </a>
        </div>
    );

    const contactDiv = (
        <div>
            <a href="/" className="text-gray-200 transition hover:opacity-75">
                Contact
            </a>
        </div>
    );

    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // viewport={{ margin: '-5px', once: true }}
            transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1],
                // delay: 1,
            }}
        >
            <div className="bg-black flex align-center">
                <div className="max-w-7xl m-auto mx-4 md:mx-10">
                    <div className="md:grid gap-10 grid-cols-2 overflow-hidden">
                        <motion.div
                            initial={{ y: -60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ margin: "160px", once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0, 0.71, 0.2, 1],
                                delay: 0.2,
                            }}
                        >
                            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-4">
                                <img alt="Logo" src={logo}></img>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 pt-4">
                        <div className="grid gap-10 grid-cols-2">
                            <div>
                                <FooterContentMotionDiv
                                    customDiv={addressDiv}
                                    delay={0.4}
                                />
                                <FooterContentMotionDiv
                                    customDiv={phoneEmailDiv}
                                    delay={0.5}
                                />
                                <ul className="mt-8 flex gap-6">
                                    <li>
                                        <FooterContentMotionDiv
                                            customDiv={facebookIconDiv}
                                            delay={0.6}
                                        />
                                    </li>

                                    <li>
                                        <FooterContentMotionDiv
                                            customDiv={instagramIconDiv}
                                            delay={0.7}
                                        />
                                    </li>

                                    <li>
                                        <FooterContentMotionDiv
                                            customDiv={twitterIconDiv}
                                            delay={0.8}
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="ml-16 md:flex justify-center">
                                <div>
                                    <ul className="space-y-4 text-sm md:text-lg">
                                        <li>
                                            <FooterContentMotionDiv
                                                customDiv={homeDiv}
                                                delay={0.45}
                                            />
                                        </li>

                                        <li>
                                            <FooterContentMotionDiv
                                                customDiv={aboutDiv}
                                                delay={0.5}
                                            />
                                        </li>

                                        <li>
                                            <FooterContentMotionDiv
                                                customDiv={servicesDiv}
                                                delay={0.55}
                                            />
                                        </li>

                                        <li>
                                            <FooterContentMotionDiv
                                                customDiv={reviewsDiv}
                                                delay={0.6}
                                            />
                                        </li>

                                        <li>
                                            <FooterContentMotionDiv
                                                customDiv={contactDiv}
                                                delay={0.65}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400">
                            &copy; 2023. Cleveland Prestige. All rights
                            reserved. Built by CDG.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
