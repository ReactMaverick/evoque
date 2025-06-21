import { selectBooking } from "@/lib/features/booking/bookingSlice"
import { useAppSelector } from "@/lib/hooks"
import BookingPagination from "./BookingPagination";
import { convertUnderscoreToCamelCase } from "@/utils/utils";

export default function BookingTable() {

    const { data: bookingData, page, limit, totalPages } = useAppSelector(selectBooking);

    // Calculate paginated data
    const paginatedData = Array.isArray(bookingData)
        ? bookingData.slice((page - 1) * limit, page * limit)
        : [];

    // Define table columns dynamically based on the keys of the first data row
    const columns = Array.isArray(bookingData) && bookingData.length > 0
        ? Object.keys(bookingData[0])
        : [];

    const columnsCamelCase = columns.map(col => convertUnderscoreToCamelCase(col));


    return (
        <div className="booking-table w-full overflow-x-auto bg-black rounded-lg shadow-lg px-4 py-4">
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
            <BookingPagination
                bookingData={bookingData}
                page={page}
                limit={limit}
                totalPages={totalPages}
                handleGoToPage={() => {}}
            />
        </div>
    )
}