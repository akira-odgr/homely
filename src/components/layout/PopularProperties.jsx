import { cn } from "@/utils/cn";
import { cardItems } from "@/constant/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardSwiper } from "../ui/CardSwiper";

export const PopularProperties = () => {
    return (
        <section id="properties" className={cn("pb-[90px]", "md:pb-[150px]")}>
            <div className="container">
                {/* Title wrapper */}
                <div className="lg:flex lg:justify-between lg:items-center">
                    <div>
                        <h2>popular properties</h2>
                        <p className="max-w-[500px] mt-4 mb-7">
                            Lorem ipsum dolor sit amet consectetur. Faucibus
                            tristique auctor mauris velit varius. Eu duis
                            viverra.
                        </p>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex-items-center gap-5 mb-5">
                        <button
                            className={cn(
                                "bg-sky-600 text-white h-12 w-12 flex-center rounded-full hover:bg-sky-700 transition-colors active:bg-sky-700",
                                "prev-btn"
                            )}
                        >
                            <RiArrowLeftSLine size={24} />
                        </button>
                        <button
                            className={cn(
                                "bg-sky-600 text-white h-12 w-12 flex-center rounded-full hover:bg-sky-700 transition-colors active:bg-sky-700",
                                "next-btn"
                            )}
                        >
                            <RiArrowRightSLine size={24} />
                        </button>
                    </div>
                </div>

                {/* Card wrapper */}
                <CardSwiper items={cardItems} />
            </div>
        </section>
    );
};
