import { Icon } from "@iconify/react";

export default function BookingPagination({
    bookingData,
    page,
    limit,
    totalPages,
    handleGoToPage = () => { }
}) {

    // Calculate the start page for the current group
    const groupSize = 3;
    const startPage = Math.floor((page - 1) / groupSize) * groupSize + 1;

    // Calculate total results on the current page
    const totalResults = bookingData.length;
    const totalDisplayedResults = Math.min(limit, totalResults - (page - 1) * limit);
    
    return (
        <div className="flex justify-between items-center mt-4 text-table-text">
            <div className="text-[0.875rem]">
                {bookingData.length > 0 ?
                    `${totalDisplayedResults} out of ${bookingData.length} results` :
                    '0 results'}
            </div>
            <div className="flex items-center space-x-2">
                <button
                    className="p-1 text-white rounded disabled:opacity-50"
                    disabled={page <= 1}
                    onClick={() => handleGoToPage(1)}
                >
                    <span className="sr-only">First</span>
                    <Icon icon="meteor-icons:angles-left" width={18} height={18} />
                </button>
                {page > 1 && (
                    <button
                        className="p-1 text-white rounded disabled:opacity-50"
                        onClick={() => handleGoToPage(page - 1)}
                    >
                        <span className="sr-only">Previous</span>
                        <Icon icon="meteor-icons:angle-left" width={18} height={18} />
                    </button>
                )}

                {/* Page numbers */}
                {[...Array(Math.min(groupSize, totalPages - startPage + 1))].map((_, idx) => {
                    const pageNum = startPage + idx;
                    return (
                        <button
                            key={pageNum}
                            className={`w-6 h-6 rounded text-[0.78rem] ${page === pageNum ? 'bg-pagination-bg text-primary' : 'bg-primary text-white'}`}
                            onClick={() => handleGoToPage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    className="p-1 text-white rounded disabled:opacity-50"
                    disabled={page >= totalPages}
                    onClick={() => handleGoToPage(page + 1)}
                >
                    <span className="sr-only">Next</span>
                    <Icon icon="meteor-icons:angle-right" width={18} height={18} />
                </button>
                <button
                    className="p-1 text-white rounded disabled:opacity-50"
                    disabled={page >= totalPages}
                    onClick={() => handleGoToPage(totalPages)}
                >
                    <span className="sr-only">Last</span>
                    <Icon icon="meteor-icons:angles-right" width={18} height={18} />
                </button>
            </div>
        </div>
    )
}