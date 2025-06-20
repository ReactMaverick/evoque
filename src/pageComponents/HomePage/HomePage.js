import Sidebar from "@/components/Sidebar/Sidebar";

export default function HomePage() {
    return (
        <div className="home-page p-[2.5rem] bg-primary h-screen ">
            <Sidebar />
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main content area of the home page.</p>
                <p>Here you can find various sections and links to navigate through the site.</p>
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                    <li><a href="#section4">Section 4</a></li>
                    <li><a href="#section5">Section 5</a></li>
                    <li><a href="#section6">Section 6</a></li>
                </ul>
            </div>
        </div>
    );
}