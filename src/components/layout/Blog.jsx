import { cn } from "@/utils/cn";
import { blogSectionCard } from "@/constant/data";

export const Blog = () => {
    return (
        <section>
            <div className="container">
                <p className="subtitle sm:text-center">Real Estate Insights</p>
                <h2
                    className={cn(
                        "max-w-[450px] mt-1",
                        "sm:text-center sm:mx-auto"
                    )}
                >
                    Tips, trends, and market news
                </h2>

                {/* card Wrapper */}
                <div
                    className={cn(
                        "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-8",
                        "md:t-12"
                    )}
                >
                    {blogSectionCard.map((item) => (
                        <div key={item.id}>
                            {/* card */}
                            <div className="border border-gray-200">
                                {/* card image */}
                                <img src={item.imgUrl} alt={item.title} />
                            </div>

                            {/* card content */}
                            <div className="p-5">
                                <a
                                    href="#"
                                    className={cn(
                                        "text-[22px] font-semibold leading-tight transition-colors",
                                        "md:text-2xl",
                                        "hover:text-sky-600"
                                    )}
                                >
                                    {item.title}
                                </a>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Sunt iure enim perferendis
                                    nobis dicta cumque.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
