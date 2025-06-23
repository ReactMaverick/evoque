import { useState } from "react";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearFilter, selectFilter, selectFilterData, setFilter } from "@/lib/features/booking/bookingSlice";

export default function BookingFilter() {

    const dispatch = useAppDispatch();

    const filterData = useAppSelector(selectFilterData);
    const filters = useAppSelector(selectFilter);

    const [open, setOpen] = useState(false);
    const [bookingFilters, setBookingFilters] = useState(filters);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookingFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleApplyFilters = () => {
        // console.log("Applying Filters:", bookingFilters);

        dispatch(setFilter(bookingFilters));
        setOpen(false);
    };

    const handleClearFilters = () => {

        dispatch(clearFilter());
        resetBookingFilters();
        setOpen(false);
        // console.log("Clearing Filters");
    };

    const resetBookingFilters = () => {
        let clearedFilters = {};

        Object.keys(filters).forEach((key) => {
            clearedFilters[key] = "";
        });

        setBookingFilters(clearedFilters);
    };

    // console.log("Filter Data:", filterData);


    return (
        <div className="relative w-full">
            {/* Desktop Filters */}
            <header className="booking-header py-6 md:flex hidden items-stretch 2xl:justify-between justify-start gap-[15px] text-white flex-wrap">
                {filterData.map((filter, idx) =>
                    filter.type === "search" ? (
                        <div
                            key={idx}
                            className="inputbox max-w-[160px] 2xl:max-w-[11%] xl:max-w-[13%] lg:max-w-[12%] w-full flex items-center gap-2 border border-border rounded-full px-[8px] py-[5px] bg-secondary"
                        >
                            <Icon icon="lucide:search" className="text-[1.25rem] text-text" />
                            <input
                                type="text"
                                placeholder={filter.placeholder}
                                className="w-full bg-secondary text-white placeholder:text-text placeholder:text-opacity-50 text-[14px] rounded-md px-[0px] py-[5px] text-sm focus:outline-none"
                                name={filter.name}
                                id={filter.name}
                                value={bookingFilters[filter.name] || ""}
                                onChange={handleChange}
                            />
                        </div>
                    ) : (
                        <div
                            key={idx}
                                className="inputbox max-w-[155px] 2xl:max-w-[11%] xl:max-w-[13%] lg:max-w-[12%] w-full flex items-center border border-border rounded-[12px] px-[5px] py-[5px] bg-secondary"
                        >
                            <select
                                className="w-full bg-secondary text-text text-[14px] rounded-lg px-[10px] py-[5px] text-sm focus:outline-none"
                                name={filter.name}
                                id={filter.name}
                                value={bookingFilters[filter.name] || ""}
                                onChange={handleChange}
                                disabled={filter.disabled || false}
                            >
                                <option value="">
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
                <button className="rounded-lg bg-btn max-w-[120px] 2xl:max-w-[10%] w-full transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-btn-text font-semibold text-sm"
                    onClick={handleApplyFilters}
                >
                    Apply
                </button>
                <button
                    className="rounded-lg bg-text transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-foreground font-semibold text-sm"
                    title="Clear Filters"
                    onClick={handleClearFilters}
                >
                    <Icon icon="lucide:trash-2" className="text-lg" />
                </button>
            </header>

            {/* Mobile Filter Button */}
            <div className="md:hidden flex justify-end px-2 py-4">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 bg-btn text-btn-text px-4 py-2 rounded-[12px] font-semibold shadow transition-all duration-200 hover:scale-105"
                >
                    <Icon icon="lucide:filter" className="text-lg" />
                    Filter
                </button>
            </div>

            {/* Mobile Sidebar Filter (fixed to BookingFilter section, not body) */}
            <div className={`md:hidden absolute right-0 top-0 h-full w-[90vw] max-w-[65vw] z-50 transition-all duration-300 ${open ? "visible" : "invisible pointer-events-none"}`}>
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
                        {filterData.map((filter, idx) =>
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
                                        name={filter.name}
                                        id={filter.name}
                                        value={bookingFilters[filter.name] || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : (
                                <div
                                    key={idx}
                                    className="inputbox w-full flex items-center border border-border rounded-[12px] px-[5px] py-[5px] bg-secondary"
                                >
                                    <select
                                        className="w-full bg-secondary text-text text-[14px] rounded-lg px-[10px] py-[5px] text-sm focus:outline-none"
                                        name={filter.name}
                                        id={filter.name}
                                        value={bookingFilters[filter.name] || ""}
                                        onChange={handleChange}
                                        disabled={filter.disabled || false}
                                    >
                                        <option value="">
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
                        <button className="rounded-lg bg-btn w-full transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-btn-text font-semibold text-sm mt-2"
                            onClick={handleApplyFilters}
                        >
                            Apply
                        </button>
                        <button
                            className="rounded-lg bg-text transition-all duration-300 ease-in-out hover:scale-105 px-[12px] py-[7px] text-white font-semibold text-sm flex items-center justify-center"
                            title="Clear Filters"
                            onClick={handleClearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}