export const CardService = ({ item }) => {
    return (
        <div
            key={item.id}
            className="border border-gray-300 p-9 rounded-lg bg-white transition-colors hover:border-sky-400"
        >
            <div className="bg-sky-200/30 max-w-max p-5 rounded-full">
                <img
                    src={item.icon}
                    alt="item.title"
                    className="w-[70px] h-[70px]"
                />
            </div>

            <h4 className="text-[22px] font-bold my-3">{item.title}</h4>
            <p>{item.text}</p>
        </div>
    );
};

export default CardService;
