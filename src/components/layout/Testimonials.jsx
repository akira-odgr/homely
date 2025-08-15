import { testimonialItems } from "@/constant/data";
import {
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiStarFill,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Testimonials = () => {
    return (
        <section className="bg-neutral-200/60">
            <div className="container">
                <p className="subtitle">Testimonials</p>
                <h2>What our clients say</h2>

                {/* card wrapper */}
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    className="mt-10 md:mt-12"
                >
                    {testimonialItems.map((item) => (
                        // card swiper slide
                        <SwiperSlide
                            key={item.id}
                            className="bg-white p-6 rounded-xl mb-16"
                        >
                            {/* card */}
                            <div>
                                <div className="flex-items-center text-yellow-500 gap-1 text-xl">
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                </div>

                                <p className="mt-2 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eius repellendus
                                    voluptatem deleniti animi, eum dicta quidem.
                                </p>

                                <div className="flex-items-center gap-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[40px] h-[40px] rounded-full aspect-square"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            {item.name}
                                        </h4>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <div className="flex items-center justify-center mt-12 gap-6 max-md:hidden">
                    <button className="prev-btn nav-btn">
                        <RiArrowLeftSLine />
                    </button>
                    <button className="next-btn nav-btn">
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
