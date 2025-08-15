import React from "react";
import { ServicesCardItem } from "@/constant/data";
import { CardService } from "@/components/ui/CardService";

export const Services = () => {
    return (
        <section className="bg-gray-200/30">
            <div className="container">
                <p className="subtitle">Services</p>
                <h2>Services we offer</h2>

                {/* list */}
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-10 md:mt-16">
                    {ServicesCardItem.map((item) => (
                        /* card */
                        <CardService key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};
