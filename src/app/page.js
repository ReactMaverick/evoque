import BookingPage from "@/pageComponents/BookingPage/BookingPage";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/booking"); // Redirect to the booking page
}
