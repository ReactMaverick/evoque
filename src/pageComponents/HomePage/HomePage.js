import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function HomePage() {
    return (
        <div className="home-page bg-primary min-h-screen pt-0">
            <Sidebar />
            <Dashboard />
        </div>
    );
}