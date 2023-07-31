import { useState } from "react";
const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();
interface IProps {
    CarouselItemTitle: string;
    CarouselItemImage: string;
}
const ServicesCarouselItem = ({
    CarouselItemTitle,
    CarouselItemImage,
}: IProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);
    return (
        <div
            onDragStart={handleDragStart}
            role="presentation"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="border-2 border-[#9b774e] grid mx-3 h-full"
        >
            <div className="group">
                <img
                    src={CarouselItemImage}
                    className={`h-[400px] ${
                        isHovering ? "brightness-100" : "brightness-[0.70]"
                    } object-cover overflow-hidden w-[100%] flex justify-center ease-in duration-200`}
                />
                <h2 className="text-white text-3xl md:text-2xl absolute bottom-6 left-10">
                    {CarouselItemTitle}
                </h2>
            </div>
        </div>
    );
};
export default ServicesCarouselItem;
