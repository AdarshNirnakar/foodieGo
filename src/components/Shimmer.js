import React from 'react'

const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="animate-pulse">
                        <div className="h-48 bg-gray-300"></div>
                        <div className="p-4">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer