import { ReactLenis } from "lenis/react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { PopularProperties } from "@/components/layout/PopularProperties";
import { Services } from "@/components/layout/Services";
import { About } from "@/components/layout/About";
import { Team } from "@/components/layout/Team";
import { Testimonials } from "@/components/layout/Testimonials";
import { Blog } from "@/components/layout/Blog";
import { Cta } from "@/components/layout/Cta";
import { Footer } from "@/components/layout/Footer";

function App() {
    return (
        <>
            <ReactLenis root />
            <div>
                <Header />
                <main>
                    <Hero />
                    <PopularProperties />
                    <Services />
                    <About />
                    <Team />
                    <Testimonials />
                    <Blog />
                    <Cta />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
