import { Icon } from "@iconify/react";

export default function DashboardHeader() {
    return (
        <header className="dashboard-header py-6 flex items-center justify-between text-white">
            <div className="flex items-center">
                <button className="bg-black rounded-lg w-[40px] h-[40px] flex items-center justify-center mr-4 hover:bg-gray-800 transition cursor-pointer text-text">
                    <Icon icon="mdi:calendar" width={35} height={35} />
                </button>
                <h1>All Bookings</h1>
            </div>
            <div className="flex items-center">
                <button className="rounder-lg w-[40px] h-[40px] flex items-center justify-center mr-4 hover:bg-gray-800 transition cursor-pointer">
                    <Icon icon="mdi-brightness-5" width={24} height={24} />
                </button>
                <button className="rounded-lg w-[40px] h-[40px] flex items-center justify-center mr-4 hover:bg-gray-800 transition cursor-pointer border border-white">
                    <Icon icon="mdi:download" width={24} height={24} />
                </button>
            </div>
        </header>
    );
}