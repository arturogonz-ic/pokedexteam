const BASE = "font-bold cursor-grab transition-all duration-300 ease-in-out";

const VARIANTS = {
    primary: "text-white bg-[rgb(255,86,86)] border-none rounded-[5px] py-2 px-[50px] hover:bg-[rgb(190,49,49)] hover:scale-110",
    danger:  "rounded-xl px-[15px] py-2 text-[rgb(255,67,67)] hover:scale-110 hover:text-white hover:bg-[rgb(225,67,67)] active:bg-[rgb(200,67,67)] active:cursor-grabbing",
    success: "rounded-xl px-[15px] py-2 text-[rgb(47,146,47)] hover:scale-110 hover:text-white hover:bg-[rgb(47,139,47)] active:bg-[rgb(47,120,47)] active:cursor-grabbing",
};

export function Button({ variant = "primary", className = "", onClick, type = "button", children }) {
    return (
        <button type={type} onClick={onClick} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
            {children}
        </button>
    );
}
