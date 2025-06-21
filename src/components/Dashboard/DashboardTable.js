import { selectDashboard } from "@/lib/features/dashboard/dashboardSlice"
import { useAppSelector } from "@/lib/hooks"
import DashboardPagination from "./DashboardPagination";
import { convertUnderscoreToCamelCase } from "@/utils/utils";

export default function DashboardTable() {

    const { data: dashboardData, page, limit, totalPages } = useAppSelector(selectDashboard);

    // Calculate paginated data
    const paginatedData = Array.isArray(dashboardData)
        ? dashboardData.slice((page - 1) * limit, page * limit)
        : [];

    // Define table columns dynamically based on the keys of the first data row
    const columns = Array.isArray(dashboardData) && dashboardData.length > 0
        ? Object.keys(dashboardData[0])
        : [];

    const columnsCamelCase = columns.map(col => convertUnderscoreToCamelCase(col));


    return (
        <div className="dashboard-table w-full overflow-x-auto bg-black rounded-lg shadow-lg px-4 py-4">
            <table className="w-full text-center text-table-text border border-text rounded-sm overflow-hidden bg-primary">
                <thead>
                    <tr>
                        {columnsCamelCase.map((col, index) => (
                            <th key={index} className="p-4 text-[0.75rem]">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-secondary">
                    {paginatedData.length > 0 ? (
                        paginatedData.map((row, index) => (
                            <tr key={index}>
                                {columns.map((col, index) => (
                                    <td key={index} className="p-4 text-[0.625rem]">
                                        {row[col] !== undefined ? row[col] : 'N/A'}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="p-4" colSpan={columns.length || 1}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <DashboardPagination
                dashboardData={dashboardData}
                page={page}
                limit={limit}
                totalPages={totalPages}
                handleGoToPage={() => {}}
            />
        </div>
    )
}