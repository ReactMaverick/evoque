import { Icon } from "@iconify/react";
import { Tickets } from 'lucide-react';
import { Download } from 'lucide-react';

export default function DashboardHeader() {
    return (
        <header className="dashboard-header py-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
                <button className="bg-black rounded-lg w-[40px] h-[40px] flex items-center justify-center transition cursor-pointer text-text hover:bg-white hover:text-black">
                    <Tickets className="w-[35px] h-[35px]" />
                </button>
                <h1>All Bookings</h1>
            </div>
            <div className="flex items-center gap-8">
                <button className="rounded-lg w-[40px] h-[40px] flex items-center justify-center transition cursor-pointer hover:bg-white hover:text-black">
                    <Icon icon="solar:sun-outline" width={24} height={24} />
                </button>
                <button className="rounded-lg w-[40px] h-[40px] flex items-center justify-center transition cursor-pointer border border-white hover:bg-white hover:text-black">
                    <Download className="w-[25px] h-[25px]" />
                </button>
            </div>
        </header>
    );
}