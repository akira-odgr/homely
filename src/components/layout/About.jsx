import { stats } from "@/constant/data";
import { Button } from "@/components/ui/Button";

export const About = () => {
    return (
        <section>
            <div className="container grid md:items-center md:grid-cols-2 gap-12.5">
                {/* content */}
                <div className="md:order-1">
                    <p className="subtitle">About Us</p>
                    <h2>Who We Are</h2>
                    <p className="mt-4 mb-8">
                        At Homely, we connect people with homes they love. With
                        over 10 years of industry experience, we provide expert
                        guidance for buyers, sellers, and investors across
                        multiple cities.
                    </p>

                    {/* states */}
                    <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10 text-center md:justify-start">
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <h3 className="text-3xl md:text-4xl font-bold text-sky-600">
                                    {stat.value} +
                                </h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <Button label="Read More" className="secondary-btn mt-8" />
                </div>

                {/* banner */}
                <figure>
                    <img src="/images/about-banner.png" alt="about banner" />
                </figure>
            </div>
        </section>
    );
};
