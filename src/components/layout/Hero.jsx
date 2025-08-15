import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export const Hero = () => {
    return (
        <div
            className={cn(
                "hero-bg py-10 min-h-screen flex-items-center",
                "lg:min-h-[860px]"
            )}
        >
            <div className="container text-gray-50">
                <h1
                    className={cn(
                        // "text-4xl",
                        // "sm:text-5xl",
                        // "md:text-6xl",
                        // "lg:text-[64px]"
                        "text-[clamp(2.25rem,4vw,4rem)]"
                    )}
                >
                    Find the <br /> Property That
                    <br /> Feels Like Home.
                </h1>
                <p className="text-gray-200 max-w-[440px] pt-4 pb-8">
                    From cozy apartments to spacious family homes, we’ll help
                    you find the one that fits your lifestyle.
                </p>

                <Button label="Search property" className="primary-btn" />
            </div>
        </div>
    );
};
