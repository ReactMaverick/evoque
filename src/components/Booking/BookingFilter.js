import { useState } from "react";
import { Icon } from "@iconify/react";

const filters = [
    { type: "search", placeholder: "Lead pax/Trip id" },
    {
        type: "select",
        placeholder: "Destination",
        options: ["All", "Destination1", "Destination2", "Destination3"],
    },
    {
        type: "select",
        placeholder: "Travel Month",
        options: ["All", "Travel Month1", "Travel Month2", "Travel Month3"],
    },
    {
        type: "select",
        placeholder: "Sort by",
        options: ["All", "Sort by1", "Sort by2", "Sort by3"],
    },
    {
        type: "select",
        placeholder: "Acc. Manager",
        options: ["All", "Acc. Manager1", "Acc. Manager2", "Acc. Manager3"],
    },
    { type: "search", placeholder: "Agent" },
    {
        type: "select",
        placeholder: "Trip status",
        options: ["All", "Trip status1", "Trip status2", "Trip status3"],
    },
];

export default function BookingFilter() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            {/* Desktop Filters */}
            <header className="booking-header py-6 md:flex hidden items-stretch xl:justify-between md:justify-start gap-[10px] text-white flex-wrap">
                {filters.map((filter, idx) =>
                    filter.type === "search" ? (
                        <div
                            key={idx}
                            className="inputbox max-w-[165px] w-full flex items-center gap-2 border border-border rounded-full px-[8px] py-[5px] bg-secondary"
                        >
                            <Icon icon="lucide:search" className="text-[1.25rem] text-text" />
                            <input
                                type="text"
                                placeholder={filter.placeholder}
                                className="w-full bg-secondary text-text placeholder:text-text placeholder:text-opacity-50 text-[14px] rounded-md px-[0px] py-[5px] text-sm focus:outline-none"
                            />
                        </div>
                    ) : (
                        <div
                            key={idx}
                            className="inputbox max-w-[150px] w-full flex items-center border border-border rounded-[12px] px-[5px] py-[5px] bg-secondary"
                        >
                            <select
                                className="w-full bg-secondary text-text text-[14px] rounded-lg px-[10px] py-[5px] text-sm focus:outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    {filter.placeholder}
                                </option>
                                {filter.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )
                )}
                <button className="rounded-lg bg-btn max-w-[120px] w-full transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-btntext font-semibold text-sm">
                    Apply
                </button>
            </header>

            {/* Mobile Filter Button */}
            <div className="md:hidden flex justify-end px-2 py-4">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 bg-btn text-btntext px-4 py-2 rounded-[12px] font-semibold shadow transition-all duration-200 hover:scale-105"
                >
                    <Icon icon="lucide:filter" className="text-lg" />
                    Filter
                </button>
            </div>

            {/* Mobile Sidebar Filter (fixed to BookingFilter section, not body) */}
            <div className={`md:hidden absolute right-0 top-0 h-full w-[90vw] max-w-xs z-50 transition-all duration-300 ${open ? "visible" : "invisible pointer-events-none"}`}>
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setOpen(false)}
                />
                {/* Sidebar */}
                <aside
                    className={`absolute right-0 top-0 h-full w-full rounded-[12px] bg-secondary z-[2] shadow-lg transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                        <span className="font-semibold text-lg text-white">Filters</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-700 transition"
                            aria-label="Close"
                        >
                            <Icon icon="lucide:x" className="text-2xl text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-secondary">
                        {filters.map((filter, idx) =>
                            filter.type === "search" ? (
                                <div
                                    key={idx}
                                    className="inputbox w-full flex items-center gap-2 border border-border rounded-full px-[8px] py-[5px] bg-secondary"
                                >
                                    <Icon icon="lucide:search" className="text-[1.25rem] text-text" />
                                    <input
                                        type="text"
                                        placeholder={filter.placeholder}
                                        className="w-full bg-secondary text-text placeholder:text-text placeholder:text-opacity-50 text-[14px] rounded-md px-[0px] py-[5px] text-sm focus:outline-none"
                                    />
                                </div>
                            ) : (
                                <div
                                    key={idx}
                                    className="inputbox w-full flex items-center border border-border rounded-[12px] px-[5px] py-[5px] bg-secondary"
                                >
                                    <select
                                        className="w-full bg-secondary text-text text-[14px] rounded-lg px-[10px] py-[5px] text-sm focus:outline-none"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            {filter.placeholder}
                                        </option>
                                        {filter.options.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )
                        )}
                        <button className="rounded-lg bg-btn w-full transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-btntext font-semibold text-sm mt-2">
                            Apply
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}