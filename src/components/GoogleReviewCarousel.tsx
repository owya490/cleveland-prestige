import AliceCarousel from "react-alice-carousel";
import GoogleReviewCarouselItem from "./GoogleReviewCarouselItem";
import {
    GalleryCarouselLeftButtonsSvg,
    GalleryCarouselRightButtonsSvg,
} from "../elements/svgs/GalleryCarouselLeftRightButtonsSvg";
import "react-alice-carousel/lib/alice-carousel.css";
import { StarSvg, HalfStarSvg } from "../elements/svgs/StarSvg";
import Config from "./GoogleReviewCarouselConfig.json";

const GoogleReviewCarousel = () => {
    const items = [
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[0].CarouselItemName}
            CarouselItemDate={Config.Items[0].CarouselItemDate}
            CarouselItemText={Config.Items[0].CarouselItemText}
            CarouselItemImage={Config.Items[0].CarouselItemImage}
        />,
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[1].CarouselItemName}
            CarouselItemDate={Config.Items[1].CarouselItemDate}
            CarouselItemText={Config.Items[1].CarouselItemText}
            CarouselItemImage={Config.Items[1].CarouselItemImage}
        />,
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[2].CarouselItemName}
            CarouselItemDate={Config.Items[2].CarouselItemDate}
            CarouselItemText={Config.Items[2].CarouselItemText}
            CarouselItemImage={Config.Items[2].CarouselItemImage}
        />,
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[3].CarouselItemName}
            CarouselItemDate={Config.Items[3].CarouselItemDate}
            CarouselItemText={Config.Items[3].CarouselItemText}
            CarouselItemImage={Config.Items[3].CarouselItemImage}
        />,
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[4].CarouselItemName}
            CarouselItemDate={Config.Items[4].CarouselItemDate}
            CarouselItemText={Config.Items[4].CarouselItemText}
            CarouselItemImage={Config.Items[4].CarouselItemImage}
        />,
        <GoogleReviewCarouselItem
            CarouselItemName={Config.Items[5].CarouselItemName}
            CarouselItemDate={Config.Items[5].CarouselItemDate}
            CarouselItemText={Config.Items[5].CarouselItemText}
            CarouselItemImage={Config.Items[5].CarouselItemImage}
        />,
    ];

    const responsiveOption = {
        0: {
            items: 1,
        },
        550: {
            items: 2,
        },
        900: {
            items: 3,
            itemsFit: "fill",
        },
        1400: {
            items: 4,
            itemsFit: "fill",
        },
        2000: {
            items: 5,
            itemsFit: "fill",
        },
        2700: {
            items: 6,
            itemsFit: "fill",
        },
    };

    return (
        <div className="relative overflow-hidden bg-black select-none ">
            <div className="grid grid-cols-1 sm:grid-cols-5 px-5">
                <div className="col-span-1 text-white pl-4 text-center sm:text-left">
                    <h1 className="font-bold text-xl mb-5 my-3 ">
                        {Config.Title}
                    </h1>
                    <div className="flex my-1 justify-center sm:justify-start">
                        <h2 className="font-bold text-base text-orange-500 ">
                            4.5
                        </h2>
                        <span className="text-orange-500 p-0.5">
                            <StarSvg></StarSvg>
                        </span>
                        <span className="text-orange-500 p-0.5 sm:hidden lg:block">
                            <StarSvg></StarSvg>
                        </span>
                        <span className="text-orange-500 p-0.5 sm:hidden lg:block">
                            <StarSvg></StarSvg>
                        </span>
                        <span className="text-orange-500 p-0.5 sm:hidden lg:block">
                            <StarSvg></StarSvg>
                        </span>
                        <span className="text-orange-500 p-0.5 sm:hidden lg:block">
                            <StarSvg></StarSvg>
                        </span>
                        <span className="text-orange-500 p-0.5 sm:hidden lg:block">
                            <HalfStarSvg />
                        </span>
                    </div>
                    <h3 className="text-xs text-gray-500 my-2">
                        {Config.Main[0].Reviews}
                    </h3>

                    <h4 className="my-2">
                        {Config.Main[0].Text}
                        <span className="font-bold">
                            {Config.Main[0].Google}
                        </span>
                    </h4>
                    <a
                        href="https://www.google.com/search?q=cleveland+prestige&oq=cle&aqs=chrome.0.35i39i355i650j46i39i175i199i650j69i57j69i60l5.2506j0j9&sourceid=chrome&ie=UTF-8#lrd=0x6b12a5df95ed3279:0xa76b23f5ba34c58d,3,,,,"
                        className="justify-center sm:justify-start flex"
                    >
                        <button className="flex my-5 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-full inline-block">
                            {Config.Main[0].ReviewText}
                            <img
                                className="mx-1 h-6 w-6"
                                src="https://freepngimg.com/download/google/66903-google-pay-gboard-platform-logo-cloud.png"
                                alt="Google Logo"
                            />
                        </button>
                    </a>
                </div>
                <div className="col-span-4 overflow-hidden hidden sm:block">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsiveOption}
                        autoPlay={true}
                        autoPlayInterval={3000}
                        infinite={true}
                        disableDotsControls={true}
                        disableButtonsControls={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default GoogleReviewCarousel;
