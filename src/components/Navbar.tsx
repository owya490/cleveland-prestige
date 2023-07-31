import { useEffect } from "react";
import "./../App.css";
import FacebookSvg from "../elements/svgs/FacebookSvg";
import InstagramSvg from "../elements/svgs/InstagramSvg";
import EmailSvg from "../elements/svgs/EmailSvg";
import PhoneSvg from "../elements/svgs/PhoneSvg";
import { motion } from "framer-motion";
import { delay } from "../services/utilities";
import { CloseCross } from "../elements/CloseCross";

const Navbar = () => {
    const NAVBAR_SCROLL_Y = 56;

    function waitForElm(selector: string) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver((mutations) => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    waitForElm("#navbar").then((elm) => {
        const navEl = document.getElementById("navbar");

        window.addEventListener("scroll", () => {
            if (window.scrollY >= NAVBAR_SCROLL_Y) {
                navEl!.classList.add("bg-black");
                // navEl!.classList.add("opacity-0");
                navEl!.classList.remove("pt-5");
            } else {
                navEl!.classList.remove("bg-black");
                navEl!.classList.add("opacity-90");
                navEl!.classList.add("pt-5");
            }
        });
    });

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY === 0) {
                console.log("hello");
            }
            return () => (window.onscroll = null);
        };

        const onPageLoad = () => {
            const serviceButton = document.getElementById("service-button");
            const serviceDropdown = document.getElementById("dropdown");
            serviceButton?.addEventListener("click", function () {
                // serviceDropdown?.classList.toggle("hidden");
                serviceDropdown?.classList.replace("hidden", "block");
            });

            const mobileServiceButton = document.getElementById(
                "mobile-service-button"
            );
            const mobileServicesNavBackButton = document.getElementById(
                "mobile-services-nav-back"
            );
            const mobileMainNav = document.getElementById("mobile-main-nav");
            const mobileServiceNav = document.getElementById(
                "mobile-services-nav"
            );
            mobileServiceButton!.addEventListener("click", async function () {
                mobileMainNav!.classList.add("-translate-y-10");
                mobileMainNav!.classList.replace("opacity-100", "opacity-0");
                await delay(150);
                mobileMainNav!.classList.add("hidden");
                await delay(50);
                mobileServiceNav!.classList.remove("hidden");
                await delay(50);
                mobileServiceNav!.classList.remove("translate-y-10");
                mobileServiceNav!.classList.replace("opacity-0", "opacity-100");
            });
            mobileServicesNavBackButton?.addEventListener(
                "click",
                async function () {
                    mobileServiceNav!.classList.add("translate-y-10");
                    mobileServiceNav!.classList.replace(
                        "opacity-100",
                        "opacity-0"
                    );
                    await delay(150);
                    mobileServiceNav!.classList.add("hidden");

                    mobileMainNav!.classList.remove("hidden");
                    await delay(50);
                    mobileMainNav!.classList.remove("-translate-y-10");
                    mobileMainNav!.classList.replace(
                        "opacity-0",
                        "opacity-100"
                    );
                }
            );

            const burger = document.querySelectorAll(".navbar-burger");
            const menu = document.querySelectorAll(".navbar-menu");
            if (burger.length && menu.length) {
                for (var i = 0; i < burger.length; i++) {
                    burger[i].addEventListener("click", function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle("hidden");
                        }
                    });
                }
            }

            // close
            const close = document.querySelectorAll(".navbar-close");
            const backdrop = document.querySelectorAll(".navbar-backdrop");

            if (close.length) {
                for (i = 0; i < close.length; i++) {
                    close[i].addEventListener("click", function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle("hidden");
                        }
                    });
                }
            }

            if (backdrop.length) {
                for (i = 0; i < backdrop.length; i++) {
                    backdrop[i].addEventListener("click", function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle("hidden");
                        }
                    });
                }
            }
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    const handleAboutNav = () => {
        if (
            window.location.href.endsWith("/") ||
            window.location.href.indexOf("about") > -1
        ) {
            console.log("hello");
            document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            window.location.href = "/about";
        }
    };

    const handleAboutNavMobile = () => {
        const menu = document.querySelectorAll(".navbar-menu");
        menu[0].classList.toggle("hidden");
        if (
            window.location.href.endsWith("/") ||
            window.location.href.indexOf("about") > -1
        ) {
            document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            window.location.href = "/about";
        }
    };

    return (
        <div>
            <div
                id="navbar"
                className="hidden md:flex fixed top-0 z-50 h-20 pt-5 min-w-full items-center transition-all duration-500 transition-linear"
            >
                <div className="grow justify-end flex">
                    <a href="/">
                        <img
                            className=" mt-1 w-24"
                            src={require("./../resources/logo/White logo transparent background.png")}
                            alt="Navbar Logo"
                        />
                    </a>
                </div>
                <div className="flex justify-center gap-8 lg:gap-20 w-1/2 px-1/2 grow">
                    <div className="group">
                        <a href="/">
                            <h2
                                className="text-white text-xl font-bold"
                                style={{
                                    fontFamily: "Rajdhani",
                                }}
                            >
                                Home
                            </h2>
                        </a>
                        <div className="h-[2px] bg-white w-0 group-hover:w-full transition-all ease-linear duration-100"></div>
                    </div>
                    <div className="group">
                        <button onClick={handleAboutNav}>
                            <h2
                                className="text-white text-xl font-bold"
                                style={{
                                    fontFamily: "Rajdhani",
                                }}
                            >
                                About
                            </h2>
                        </button>
                        <div className="h-[2px] bg-white w-0 group-hover:w-full transition-all ease-linear duration-100"></div>
                    </div>
                    <div className="group dropdown inline-block relative">
                        <button id="service-button">
                            <h2
                                className="text-white text-xl font-bold"
                                style={{
                                    fontFamily: "Rajdhani",
                                }}
                            >
                                Services
                            </h2>
                        </button>
                        <ul className="dropdown-menu absolute hidden group-hover:block text-white pt-4 -left-5">
                            <li className="">
                                <a
                                    className="bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/detailing"
                                >
                                    Detailing
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/exterior-body-work"
                                >
                                    Exterior Body Work
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/modifications"
                                >
                                    Modifications
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/pink-blue-slip"
                                >
                                    Pink & Blue Slip
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className=" bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/repairs"
                                >
                                    Repairs
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-black hover:bg-[#1c1c1c] py-2 px-4 block whitespace-no-wrap"
                                    href="/services/servicing"
                                >
                                    Servicing
                                </a>
                            </li>
                        </ul>
                        <div className="h-[2px] bg-white w-0 group-hover:w-full transition-all ease-linear duration-100"></div>
                    </div>
                    <div className="group">
                        <a href="/contact">
                            <h2
                                className="text-white text-xl font-bold"
                                style={{
                                    fontFamily: "Rajdhani",
                                }}
                            >
                                Contact Us
                            </h2>
                        </a>
                        <div className="h-[2px] bg-white w-0 group-hover:w-full transition-all ease-linear duration-100"></div>
                    </div>
                </div>
                <div className="grow flex gap-3">
                    {/* <button className="text-white px-4 py-1 rounded-lg text-2xl border-2 border-white hover:border-[#9b774e] hover:bg-[#9b774e] transition ease-linear duration-200">
                        9804 1218
                    </button> */}
                    <a href="www.facebook.com">
                        <FacebookSvg />
                    </a>
                    <a href="www.instagram.com">
                        <InstagramSvg />
                    </a>

                    <a href="www.gmail.com">
                        <EmailSvg />
                    </a>

                    <a href="/">
                        <PhoneSvg />
                    </a>
                </div>
            </div>
            <div className="md:hidden fixed grid grid-cols-5 top-0 z-50 h-12 bg-black opacity-90 w-full justify-end items-center">
                <div className="col-span-1 flex items-center">
                    <a href="/">
                        <img
                            className=" mt-1 w-12 ml-2"
                            src={require("./../resources/logo/White logo transparent background.png")}
                            alt="Navbar Logo"
                        />
                    </a>
                </div>
                <div className="col-span-3 flex items-center justify-center grow">
                    <h1
                        className="text z-40 text-white text-center pl-3"
                        style={{
                            fontFamily: "Felix Titling",
                        }}
                    >
                        CLEVELAND PRESTIGE
                    </h1>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <button className="navbar-burger flex items-center text-white px-3 h-10 mr-3 rounded-lg">
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-4/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a
                            className="mr-auto text-3xl font-bold leading-none"
                            href="/"
                        >
                            <img
                                className="w-1/4"
                                src={require("./../resources/logo/Black logo transparent background.png")}
                                alt="Navbar Logo"
                            />
                        </a>
                        <button className="navbar-close">
                            <CloseCross />
                        </button>
                    </div>
                    <div>
                        <ul
                            id="mobile-main-nav"
                            className="transition-linear duration-150 opacity-100 text-black"
                        >
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold  hover:bg-gray-200"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-1">
                                <button
                                    className="block p-4 text-sm font-semibold  hover:bg-gray-200"
                                    onClick={handleAboutNavMobile}
                                >
                                    About Us
                                </button>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold  hover:bg-gray-200"
                                    // href="/services/detailing"
                                    id="mobile-service-button"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/contact"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        <ul
                            id="mobile-services-nav"
                            className="transition-linear duration-150 translate-y-10 opacity-0 text-black hidden"
                        >
                            <li className="bg-gray-100">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                                    // href="/services/detailing"
                                    id="mobile-services-nav-back"
                                >
                                    Back
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/detailing"
                                >
                                    Detailing
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/exterior-body-work"
                                >
                                    Exterior Body Work
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/modifications"
                                >
                                    Modifications
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/pink-blue-slip"
                                >
                                    Pink & Blue Slip
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className=" block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/repairs"
                                >
                                    Repairs
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="block p-4 text-sm font-semibold hover:bg-gray-200"
                                    href="/services/servicing"
                                >
                                    Servicing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Cleveland Prestige 2023</span>
                        </p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
