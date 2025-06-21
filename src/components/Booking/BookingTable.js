import { selectBooking, selectFilteredData, setPage } from "@/lib/features/booking/bookingSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import BookingPagination from "./BookingPagination";
import { convertUnderscoreToCamelCase } from "@/utils/utils";
import BookingFilter from "./BookingFilter";
import { Icon } from "@iconify/react";

export default function BookingTable() {

    const dispatch = useAppDispatch();

    const { data: bookingData, limit } = useAppSelector(selectBooking);

    const { data: paginatedData, currentPage: page, totalPages } = useAppSelector(selectFilteredData);


    // Define table columns dynamically based on the keys of the first data row
    const columns = Array.isArray(bookingData) && bookingData.length > 0
        ? Object.keys(bookingData[0])
        : [];

    const columnsCamelCase = columns.map(col => convertUnderscoreToCamelCase(col));

    // Function to render cell content based on column type
    const renderCell = (value, column) => {
        console.log(`Rendering cell for column: ${column}, value: ${value}`);

        let cell = value;
        switch (column) {
            case 'trip_status':
                switch (value) {
                    case 'Travelled':
                        cell = <span className="bg-lime-green px-2 py-1 rounded-xl text-black">Travelled</span>;
                        break;
                    case 'Confirmed':
                        cell = <span className="bg-light-blue px-2 py-1 rounded-xl text-black">Confirmed</span>;
                        break;
                    case 'Cancelled':
                        cell = <span className="bg-pastel-red px-2 py-1 rounded-xl text-black">Cancelled</span>;
                        break;
                    case 'On Tour':
                        cell = <span className="bg-pastel-yellow px-2 py-1 rounded-xl text-black">On Tour</span>;
                        break;
                    default:
                        cell = <span className="text-gray-500 font-semibold">{value}</span>;
                        break;
                }
                break;
            case 'booking_status':
                switch (value) {
                    case 'pending':
                        cell = <span className="flex justify-center items-center"><Icon icon="ic:round-circle" className="text-yellow-500 w-5 h-5" /></span>;
                        break;
                    case 'active':
                        cell = <span className="flex justify-center items-center"><Icon icon="ic:round-circle" className="text-green-500 w-5 h-5" /></span>;
                        break;
                    case 'cancelled':
                        cell = <span className="flex justify-center items-center"><Icon icon="ic:round-circle" className="text-red-500 w-5 h-5" /></span>;
                        break;
                    default:
                        cell = <span className="text-gray-500 font-semibold">{value}</span>;
                        break;
                }
                break;
            default:
                break;
        };

        return cell;
    };

    // Function to handle page change
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            dispatch(setPage(newPage));
        }
    };

    return (
        <div className="booking-table w-full bg-black rounded-lg overflow-hidden shadow-lg px-4 py-4">
            {/* Booking Filter  */}
            <BookingFilter />
            <div className="rounded-[4px] overflow-x-auto">
                <table className="w-full text-left text-table-text border-2 border-table-border rounded-[4px] overflow-hidden bg-primary border-collapse">
                    <thead>
                        <tr>
                            {columnsCamelCase.map((col, index) => (
                                <th key={index} className="p-2 bg-primary text-[14px] font-normal border border-table-border"
                                    style={
                                        columns[index].toLowerCase().includes("value")
                                            ? { width: "80px", minWidth: "80px", maxWidth: "80px" }
                                            : undefined
                                    }
                                >
                                    {col}
                                </th>
                            ))}
                            <th className="p-2 text-[14px] border border-table-border font-normal">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-secondary">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, index) => (
                                <tr key={index}>
                                    {columns.map((col, index) => (
                                        <td key={index} className="p-2 text-[10px] border border-table-border"
                                            style={
                                                col.toLowerCase().includes("value")
                                                    ? { width: "80px", minWidth: "80px", maxWidth: "80px" }
                                                    : undefined
                                            }
                                        >
                                            {renderCell(row[col], col)}
                                        </td>
                                    ))}
                                    <td className="p-2 text-[10px] border border-table-border">
                                        <div className="flex justify-center">
                                            <button title="Edit" className="bg-btn rounded-lg h-[35px] w-[35px] flex justify-center items-center hover:bg-btn-hover transition text-black">
                                                <Icon icon="material-symbols:edit-outline" width={20} height={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="p-2 border border-table-border" colSpan={columns.length || 1}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <BookingPagination
                bookingData={bookingData}
                page={page}
                limit={limit}
                totalPages={totalPages}
                handleGoToPage={handlePageChange}
            />
        </div>
    )
}