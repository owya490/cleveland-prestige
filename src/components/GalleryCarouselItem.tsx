import { useState } from "react";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();

interface ICarouselItemProps {
    CarouselItemText: string;
    CarouselItemImage: string;
}

const CarouselItem = ({
    CarouselItemText,
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
        >
            <p className="text-center">{CarouselItemText}</p>

            <img
                src={CarouselItemImage}
                className={`h-[300px] ${
                    isHovering ? "brightness-[0.7]" : "brightness-[1]"
                } object-cover overflow-hidden w-[100%] flex justify-center ease-in duration-200`}
            />
        </div>
    );
};

export default CarouselItem;
