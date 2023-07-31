import React, { useState } from "react";
import DetailingServicesFAQImage from "../../../resources/images/DetailingServicesFAQImage.png";
import {
    ServicesFAQDropdownDownArrow,
    ServicesFAQDropdownUpArrow,
} from "../../../elements/svgs/ServicesFAQDropdownArrow";
import Config from "./ExteriorBodyWorkConfig.json";

const ExteriorBodyWorkFAQ = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    const expandAnswer = (box: number) => {
        let boxBoolean;
        switch (box) {
            case 0:
                setBox1(!box1);
                boxBoolean = box1;
                break;
            case 1:
                setBox2(!box2);
                boxBoolean = box2;

                break;
            case 2:
                setBox3(!box3);
                boxBoolean = box3;

                break;
            case 3:
                setBox4(!box4);
                boxBoolean = box4;
                break;
        }
        const answerbox = document.getElementById(box.toString());
        const selectionGoldLine = document.getElementById(
            `selection-gold-line${box}`
        );
        const selectionGreyLine = document.getElementById(
            `selection-grey-line${box}`
        );
        const faqDropdownUpArrow = document.getElementById(
            `services-faq-dropdown-up-arrow-${box}`
        );
        const faqDropdownDownArrow = document.getElementById(
            `services-faq-dropdown-down-arrow-${box}`
        );

        if (boxBoolean) {
            answerbox!.classList.replace("max-h-40", "max-h-0");
            selectionGoldLine!.classList.replace("w-full", "w-0");
            selectionGreyLine!.classList.replace("w-0", "w-full");
            faqDropdownUpArrow!.classList.replace("a", "hidden");
            faqDropdownDownArrow!.classList.replace("hidden", "a");
        } else {
            answerbox!.classList.replace("max-h-0", "max-h-40");
            selectionGoldLine!.classList.replace("w-0", "w-full");
            selectionGreyLine!.classList.replace("w-full", "w-0");
            faqDropdownUpArrow!.classList.replace("hidden", "a");
            faqDropdownDownArrow!.classList.replace("a", "hidden");
        }
    };

    return (
        <div className="bg-black flex align-center">
            <div className="max-w-7xl m-auto ">
                <div className="grid lg:grid-cols-2 gap-10 select-none border-0 mx-10 md:mx-20">
                    <div className=" lg:my-[100px] my-[0px]">
                        <div className="">
                            <h1 className="text-white font-medium rounded-lg text-3xl md:text-4xl my-5 lg:my-0">
                                {Config.FAQ.Title}
                            </h1>
                        </div>
                        <div className=" min-h-50vh overflow-hidden">
                            {Config.FAQ.Questions.map((faq, idx) => {
                                return (
                                    <div className="group">
                                        <div
                                            className="bg-black shadow p-8 cursor-pointer"
                                            onClick={() => expandAnswer(idx)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h2 className="text-base font-semibold leading-none text-white ">
                                                        {faq.Question}
                                                    </h2>
                                                </div>
                                                <button
                                                    id={`services-faq-dropdown-up-arrow-${idx}`}
                                                    className="hidden"
                                                >
                                                    <ServicesFAQDropdownUpArrow />
                                                </button>
                                                <button
                                                    id={`services-faq-dropdown-down-arrow-${idx}`}
                                                    className="a"
                                                >
                                                    <ServicesFAQDropdownDownArrow />
                                                </button>
                                            </div>

                                            {
                                                <ul
                                                    id={idx.toString()}
                                                    className="transition-linear duration-500 max-h-0 overflow-hidden"
                                                >
                                                    <li>
                                                        <p className="text-base leading-normal text-white mt-4 lg:w-96">
                                                            {faq.Answer}
                                                        </p>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                        <div className="flex">
                                            <div
                                                id={`selection-gold-line${idx}`}
                                                className="bg-[#9b774e] h-[2px] w-0 sm:group-hover:w-full transition-all duration-300"
                                            ></div>
                                            <div
                                                id={`selection-grey-line${idx}`}
                                                className="bg-[#3b3b3b] h-[2px] sm:group-hover:w-0 w-full transition-all duration-300"
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center max max-h-[600px] my-auto">
                        <img
                            src={DetailingServicesFAQImage}
                            className="border-2 border-[#9b774e] rounded object-cover transition-linear duration-150"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExteriorBodyWorkFAQ;
