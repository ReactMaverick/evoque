import Sidebar from "@/components/Sidebar/Sidebar";
import Booking from "@/components/Booking/Booking";

export default function BookingPage() {
    return (
        <div className="home-page bg-primary min-h-screen pt-0">
            <Sidebar />
            <Booking />
        </div>
    );
}