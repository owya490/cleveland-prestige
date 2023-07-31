import "./../App.css";
import { motion } from "framer-motion";

const HeroBanner = () => {
    return (
        <div>
            <div className="relative flex flex-col min-h-screen min-w-screen overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        delay: 0.6,
                    }}
                >
                    <img
                        className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50 flex items-center max-h-full object-cover"
                        src={require("./../resources/images/MainHeroImage.jpeg")}
                        alt="Hero"
                    />
                </motion.div>

                <div className="flex h-full w-full grow z-10 relative flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 0.3,
                        }}
                        className="inset-x-[10px] mt-8 absolute flex justify-center items-center"
                    >
                        <img
                            className="z-50 w-[7rem] mb-3 -ml-[75px] md:w-[10rem] md:mb-6 md:-ml-[106px] xl:w-[9rem] xl:mb-[3px] xl:-ml-[97px]"
                            src={require("./../resources/logo/White c transparent background (1).png")}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 0.3,
                        }}
                        className="inset-x-[101px] absolute mt-10 flex justify-center"
                    >
                        <img
                            className="z-50 min-w-[9.2rem] w-[9.2rem] ml-[75px] -mb-3 md:w-[13rem] md:-mb-3 md:ml-[106px] xl:w-[12rem] xl:-mb-8 xl:ml-[97px]"
                            src={require("./../resources/logo/White p transparent background (1).png")}
                        />
                    </motion.div>
                </div>
                <div className="flex flex-col h-full w-full grow">
                    <h1
                        className="text-5xl z-40 text-white md:text-6xl md:mb-6 lg:text-6xl lg:mb-10 xl:text-7xl xl:mb-14 text-center"
                        style={{
                            fontFamily: "Felix Titling",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 1, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                ease: [0, 0.71, 0.2, 1],
                                duration: 3,
                                stiffness: 100,
                                delay: 0.6,
                            }}
                        >
                            CLEVELAND PRESTIGE
                        </motion.div>
                    </h1>

                    <div className="grid grid-cols-9 xl:grid-cols-11 gap-2 z-50">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: [0, 0.4, 0.1, 1],
                                duration: 2,
                                delay: 0.7,
                            }}
                            className="col-start-3 col-span-2 xl:col-span-2 xl:col-start-4 overflow-hidden"
                        >
                            <button
                                type="button"
                                className="w-full h-full text-white font-normal rounded-lg hidden md:block text-base lg:text-xl xl:text-2xl px-5 py-2.5 mr-2 mb-2 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] transition ease-linear duration-200"
                            >
                                <motion.div
                                    initial={{ y: "150%" }}
                                    animate={{ y: "0%" }}
                                    transition={{
                                        ease: [0, 0.4, 0.2, 1],
                                        duration: 2,
                                        delay: 0.7,
                                    }}
                                >
                                    <h1>GET QUOTE</h1>
                                </motion.div>
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: [0, 0.4, 0.2, 1],
                                duration: 2,
                                delay: 0.9,
                            }}
                            className="col-start-6 col-span-2 xl:col-span-2 xl:col-start-7 overflow-hidden"
                        >
                            <button
                                type="button"
                                className="w-full h-full text-white font-normal rounded-lg hidden md:block text-base lg:text-xl xl:text-2xl  px-5 py-2.5 mr-2 mb-2 bg-none border-2 border-[#9b774e] hover:bg-[#9b774e] transition ease-linear duration-200"
                            >
                                <motion.div
                                    initial={{ y: "150%" }}
                                    animate={{ y: "0%" }}
                                    transition={{
                                        ease: [0, 0.4, 0.1, 1],
                                        duration: 2,
                                        delay: 0.8,
                                    }}
                                >
                                    <h1>CALL NOW</h1>
                                </motion.div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
