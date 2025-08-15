import { teams } from "@/constant/data";
import { Button } from "@/components/ui/Button";

export const Team = () => {
    return (
        <section>
            <div className="container">
                <p className="subtitle">Our Team</p>
                <h2>Meet our Team</h2>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 mt-10">
                    {teams.map((member) => (
                        <div key={member.id} className="relative">
                            {/* image */}
                            <div>
                                <img src={member.img} alt={member.name} />
                            </div>

                            <div className="absolute -bottom-10 border bg-white border-gray-300 p-4 rounded-lg left-1/2 -translate-x-1/2 w-[80%] text-center">
                                <h4 className="text-lg text-sky-700">
                                    {member.name}
                                </h4>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Button
                    label="View More"
                    className="secondary-btn ml-auto block mt-20 rounded-md"
                />
            </div>
        </section>
    );
};
