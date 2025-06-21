'use client';

import DashboardHeader from "./DashboardHeader";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <div className="dashboard p-[1rem] pt-0 bg-primary ml-[5rem]">
      <DashboardHeader />
      <DashboardTable />
    </div>
  );
}