import AliceCarousel from "react-alice-carousel";
import CarouselItem from "./ServicesCarouselItem";
import "react-alice-carousel/lib/alice-carousel.css";
import Config from "./ServicesCarouselConfig.json";

const ServicesCarousel = () => {
    const items = [
        <CarouselItem
            CarouselItemTitle="Modifications"
            CarouselItemImage="https://www.jdmconcept.com.au/files/uploaded/step3jpg_1653625580.jpg"
        />,
        <CarouselItem
            CarouselItemTitle="Servicing"
            CarouselItemImage="https://www.autodeal.com.ph/custom/blog-post/header/is-ceramic-coating-better-than-applying-car-wax-6144564716152.jpg"
        />,
        <CarouselItem
            CarouselItemTitle="Detailing"
            CarouselItemImage="https://www.constantcontact.com/blog/wp-content/uploads/2021/01/Blog-header-3-1.jpg"
        />,
        <CarouselItem
            CarouselItemTitle="Mechanical Repairs"
            CarouselItemImage="https://assets-jb.fmg-services.co.uk/IAM/uploads/hub/advices/501_1000/pexels-photo-401800.jpg"
        />,
        <CarouselItem
            CarouselItemTitle="Exterior Body Work"
            CarouselItemImage="https://www.thedrive.com/content/2019/12/best-automotive-paint-gun.jpg?quality=85"
        />,
    ];

    const responsiveOption = {
        0: {
            items: 1,
        },
        1024: {
            items: 2,
            itemsFit: "fill",
        },
        1500: {
            items: 3,
            itemsFit: "fill",
        },
    };

    return (
        <div className="bg-black">
            <div className="max-w-7xl m-auto ">
                <div className="grid lg:grid-cols-4 sm:mx-10 lg:mx-20">
                    <div className="lg:col-start-1 lg:col-span-3 2xl:col-span-3 overflow-hidden">
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            responsive={responsiveOption}
                            infinite={true}
                            disableDotsControls={true}
                            disableButtonsControls={true}
                        />
                    </div>
                    <div className="relative lg:col-start-4 2xl:col-start-4 lg:col-span-1 2xl:col-span-1 ml-5">
                        <h1 className="text-white text-4xl lg:text-4xl hidden lg:block">
                            Cleveland
                            <br />
                            Prestige
                            <br />
                            offers a
                            <br />
                            wide range
                            <br />
                            of services
                        </h1>
                        <h1 className="text-white text-4xl lg:text-5xl lg:hidden mt-4">
                            {Config.Title}
                        </h1>

                        <p className="text-white text-xl mt-5 mb-20 lg:mb-16 col-span-3 2xl:col-span-2">
                            {Config.Text}
                        </p>
                        <button
                            type="button"
                            className="text-white mt-10 lg:mt-5 font-medium text-md px-4 py-2.5 mr-2 mb-0 bg-none border-[#9b774e] border-2 hover:bg-[#9b774e] transition ease-linear duration-200 inline-block absolute bottom-0"
                        >
                            MAKE A BOOKING
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCarousel;
