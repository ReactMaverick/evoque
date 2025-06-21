'use client';

import BookingHeader from "./BookingHeader";
import BookingTable from "./BookingTable";

export default function Booking() {
  return (
    <div className="booking p-[1rem] pt-0 bg-primary ml-[5rem]">
      <BookingHeader />
      <BookingTable />
    </div>
  );
}