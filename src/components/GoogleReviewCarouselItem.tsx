import { useState } from "react";
import { StarSvg } from "../elements/svgs/StarSvg";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();

interface ICarouselItemProps {
    CarouselItemName: string;
    CarouselItemText: string;
    CarouselItemDate: string;
    CarouselItemImage: string;
}

const GoogleReviewCarouselItem = ({
    CarouselItemName,
    CarouselItemText,
    CarouselItemDate,
    CarouselItemImage,
}: ICarouselItemProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    return (
        <div
            onDragStart={handleDragStart}
            role="presentation"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="text-white p-4"
        >
            <div className="flex">
                <img
                    className="object-cover rounded-full overflow-hidden h-12 w-12"
                    src={CarouselItemImage}
                />

                <div className="block ml-3">
                    <h1 className="text-[#2448ab] font-bold text-lg">
                        {CarouselItemName}
                    </h1>

                    <h2 className="text-sm">{CarouselItemDate}</h2>
                </div>
            </div>
            <div className="flex my-3">
                <span className="text-orange-500 p-0.5">
                    <StarSvg></StarSvg>
                </span>
                <span className="text-orange-500 p-0.5">
                    <StarSvg></StarSvg>
                </span>
                <span className="text-orange-500 p-0.5">
                    <StarSvg></StarSvg>
                </span>
                <span className="text-orange-500 p-0.5">
                    <StarSvg></StarSvg>
                </span>
                <span className="text-orange-500 p-0.5">
                    <StarSvg></StarSvg>
                </span>
            </div>

            <p>{CarouselItemText}</p>
        </div>
    );
};

export default GoogleReviewCarouselItem;
