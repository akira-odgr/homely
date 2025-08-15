import { useState } from "react";
import ReactPlayer from "react-player";
import { RiPauseFill, RiPlayFill } from "react-icons/ri";
import { cn } from "@/utils/cn";
import { useRef } from "react";

export const Cta = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause = () => setIsPlaying((prev) => !prev);

    return (
        <section className="py-20">
            <div className="container md:h-[600px] flex justify-center relative bg-white group overflow-hidden rounded-lg">
                <div>
                    <ReactPlayer
                        src="/images/Cta-video.mp4"
                        ref={playerRef}
                        playing={isPlaying}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>

                {/* play/pause button */}
                <button
                    className={cn(
                        "absolute inset-0 m-auto bg-neutral-50/90 w-[60px] h-[60px] flex-center rounded-full shadow-lg",
                        isPlaying
                            ? "opacity-0 group-hover:opacity-100"
                            : "opacity-100"
                    )}
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <RiPauseFill size={30} />
                    ) : (
                        <RiPlayFill size={30} />
                    )}
                </button>
            </div>
        </section>
    );
};
