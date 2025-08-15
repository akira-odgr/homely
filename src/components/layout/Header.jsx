import { useState } from "react";
import { navItems } from "@/constant/data";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
    const headerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    useGSAP(() => {
        gsap.to(headerRef.current, {
            scrollTrigger: {
                trigger: document.body,
                start: "100px top",
                toggleClass: {
                    targets: headerRef.current,
                    className: "active",
                },
            },
        });
    }, []);

    return (
        <header ref={headerRef} className="header">
            <div className="container flex-between">
                <a href="#">
                    <img
                        src="/images/Logo.png"
                        alt="logo"
                        width={115}
                        height={59}
                    />
                </a>

                {/* Mobile Menu */}
                <nav
                    className={cn(
                        "navbar -translate-x-[280px]",
                        isOpen && "translate-x-0"
                    )}
                >
                    <button className="ml-auto mb-10" onClick={handleClick}>
                        <RiCloseFill size={30} />
                    </button>

                    <ul className="flex-column-center flex-1 gap-y-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors",
                                        "hover:text-sky-600"
                                    )}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Button label="Get Started" className="secondary-btn" />
                </nav>

                {/* Menu toggle */}
                <button className="md:hidden" onClick={handleClick}>
                    <RiMenuFill size={30} />
                </button>

                {/* lg menu */}
                <ul
                    className={cn(
                        "hidden",
                        "md:flex md:items-center md:gap-x-10"
                    )}
                >
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={cn(
                                "font-medium transition-colors",
                                "hover:text-gray-200"
                            )}
                        >
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}

                    <Button label="Get Started" className="primary-btn" />
                </ul>

                {/* overlay */}
                <div
                    className={cn(
                        "overlay opacity-0 pointer-events-none",
                        isOpen && "opacity-100 pointer-events-auto"
                    )}
                    onClick={handleClick}
                />
            </div>
        </header>
    );
};
