import { ReactNode } from "react";
import AliceCarousel from "react-alice-carousel";
import CarouselItem from "./GalleryCarouselItem";
import {
    GalleryCarouselLeftButtonsSvg,
    GalleryCarouselRightButtonsSvg,
} from "../elements/svgs/GalleryCarouselLeftRightButtonsSvg";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from "framer-motion";

interface IMotionDivProps {
    customDiv: ReactNode;
    delay: number;
}

const GalleryCarouselItemMotionDiv = ({
    customDiv,
    delay,
}: IMotionDivProps) => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-5px", once: true }}
            transition={{ duration: 2, ease: [0, 0.71, 0.2, 1], delay: delay }}
        >
            {customDiv}
        </motion.div>
    );
};

const GalleryCarousel = () => {
    const items = [
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://cdn.motor1.com/images/mgl/WO7qr/s3/bugatti-chiron-super-sport-300-exterior.webp"
                />
            }
            delay={0}
        />,
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp"
                />
            }
            delay={0.1}
        />,
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://assets.whichcar.com.au/image/upload/s--MCzROGgZ--/c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/whichcar-media/2407/bugatti-chiron-front-side.jpg"
                />
            }
            delay={0.2}
        />,
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://assets.whichcar.com.au/image/upload/s--zdwl44N3--/c_fill,f_auto,q_auto:good/t_p_social/v1/archive/whichcar/2020/01/15/-1/10-Cool-Cars-Australia-Needs.jpg"
                />
            }
            delay={0.3}
        />,
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://e1.pxfuel.com/desktop-wallpaper/140/706/desktop-wallpaper-crazy-cool-cars-weird-cars.jpg"
                />
            }
            delay={0.4}
        />,
        <GalleryCarouselItemMotionDiv
            customDiv={
                <CarouselItem
                    CarouselItemText=""
                    CarouselItemImage="https://esautotech.com.au/wp-content/uploads/2021/03/Scheduled-Vehicle-Maintenance-12.jpg"
                />
            }
            delay={0.5}
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
        <div className="relative overflow-hidden">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsiveOption}
                    autoPlay={true}
                    autoPlayInterval={4500}
                    infinite={true}
                    autoHeight={true}
                    disableDotsControls={true}
                    renderPrevButton={() => {
                        return (
                            <div className="absolute left-0 top-[115px]">
                                <div className="absolute cursor-pointer -left-8 border-0 p-8 rounded-full bg-gray-800 hover:bg-gray-900 bg-opacity-60 ease-in duration-100"></div>
                                <div className="absolute top-[19.5px] cursor-pointer pointer-events-none">
                                    <GalleryCarouselLeftButtonsSvg />
                                </div>
                            </div>
                        );
                    }}
                    renderNextButton={() => {
                        return (
                            <div className="absolute right-0 top-[115px]">
                                <div className="absolute cursor-pointer -right-8 border-0 p-8 rounded-full bg-gray-800 hover:bg-gray-900 bg-opacity-60 ease-in duration-100"></div>
                                <div className="absolute top-[19.5px] right-0 cursor-pointer pointer-events-none">
                                    <GalleryCarouselRightButtonsSvg />
                                </div>
                            </div>
                        );
                    }}
                />
            </motion.div>
        </div>
    );
};

export default GalleryCarousel;
