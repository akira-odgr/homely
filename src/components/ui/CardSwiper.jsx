// src/components/ui/CardSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardSwiper = ({ items, loading = false }) => {
    if (loading) {
        // スケルトンカード3枚表示
        return (
            <div className="flex gap-6">
                {[...Array(3)].map((_, idx) => (
                    <div
                        key={idx}
                        className="animate-pulse w-full max-w-sm rounded overflow-hidden border border-gray-200"
                    >
                        {/* 画像部分 */}
                        <div className="bg-gray-300 h-48 w-full"></div>

                        {/* テキスト部分 */}
                        <div className="p-4 space-y-3">
                            <div className="bg-gray-300 h-6 w-1/3 rounded"></div>
                            <div className="bg-gray-300 h-4 w-2/3 rounded"></div>
                            <div className="bg-gray-300 h-4 w-1/2 rounded"></div>

                            {/* アイコンなど */}
                            <div className="flex gap-2">
                                <div className="bg-gray-300 h-4 w-12 rounded"></div>
                                <div className="bg-gray-300 h-4 w-12 rounded"></div>
                                <div className="bg-gray-300 h-4 w-12 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!items || items.length === 0) {
        return <p>No cards available.</p>;
    }

    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                delay: 5000,
            }}
            navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
            }}
            spaceBetween={30}
            breakpoints={{
                575: {
                    slidesPerView: 2,
                },
                993: {
                    slidesPerView: 3,
                },
            }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id} className="mb-20">
                    {/* card */}
                    <div className="group shadow-lg rounded-xl overflow-hidden">
                        {/* card image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.imgURL}
                                alt={item.name}
                                className="group-hover:scale-105 "
                            />
                        </div>

                        {/* card content */}
                        <div className="p-5">
                            <b className="text-xl text-gray-900">
                                {item.price}
                            </b>
                            <a
                                href="#"
                                className="block font-semibold text-xl leading-tight mt-2 text-gray-700 hover:text-sky-700 transition-colors"
                            >
                                {item.name}
                            </a>
                            <p>{item.location}</p>

                            <div className="flex flex-wrap">
                                <p>{item.bed}</p>
                                <p>{item.bath}</p>
                                <p>{item.area}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
