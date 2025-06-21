export default function DashboardPagination({ 
    dashboardData,
    page,
    limit,
    totalPages,
    handleGoToPage = () => {}
 }) {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="text-sm">
                {dashboardData.length > 0 ?
                    `${(page - 1) * limit + 1}-${Math.min(page * limit, dashboardData.length)} out of ${dashboardData.length} results` :
                    '0 results'}
            </div>
            <div className="flex items-center space-x-2">
                <button
                    className="p-1 bg-gray-700 text-white rounded disabled:opacity-50"
                    disabled={page <= 1}
                // onClick={() => handleGoToPage(1)}
                >
                    <span className="sr-only">First</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>
                <button
                    className="p-1 bg-gray-700 text-white rounded disabled:opacity-50"
                    disabled={page <= 1}
                // onClick={() => handleGoToPage(page - 1)}
                >
                    <span className="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>

                {/* Page numbers */}
                {[...Array(Math.min(totalPages, 3))].map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                        <button
                            key={pageNum}
                            className={`w-8 h-8 rounded ${page === pageNum ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
                        // onClick={() => handleGoToPage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    className="p-1 bg-gray-700 text-white rounded disabled:opacity-50"
                    disabled={page >= totalPages}
                // onClick={() => handleGoToPage(page + 1)}
                >
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <button
                    className="p-1 bg-gray-700 text-white rounded disabled:opacity-50"
                    disabled={page >= totalPages}
                // onClick={() => handleGoToPage(totalPages)}
                >
                    <span className="sr-only">Last</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}