import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "./Dashboard";

export default function HomePage() {
    return (
        <div className="home-page p-[2.5rem] bg-primary h-screen ">
            <Sidebar />
            <Dashboard />
        </div>
    );
}