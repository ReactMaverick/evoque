import { Icon } from "@iconify/react";
import { Tickets } from 'lucide-react';
import { Download } from 'lucide-react';

export default function BookingHeader() {

    const handleToggleTheme = () => {
        document.documentElement.classList.toggle('light');
    }

    return (
        <header className="booking-header py-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
                <div className="bg-black rounded-lg md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex items-center justify-center transition text-text">
                    <Tickets className="md:w-[35px] md:h-[35px] w-[25px] h-[25px]" />
                </div>
                <h1>All Bookings</h1>
            </div>
            <div className="flex items-center gap-8">
                <button className="themeModeButton rounded-lg md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center transition cursor-pointer hover:bg-white hover:text-black"
                    title="Toggle Theme"
                    onClick={handleToggleTheme}
                >
                    <Icon icon="solar:sun-outline" width={24} height={24} />
                </button>
                <button className="rounded-lg md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center transition cursor-pointer border border-white hover:bg-white hover:text-black">
                    <Download className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
                </button>
            </div>
        </header>
    );
}