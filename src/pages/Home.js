import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from '../components/Shimmer'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [showTopRated, setShowTopRated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();

        const fetchedRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(fetchedRestaurants);
        setAllRestaurants(fetchedRestaurants);
        setIsLoading(false);
    }

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        if (searchValue === '') {
            setRestaurants(allRestaurants);
        } else {
            const filteredRestaurants = allRestaurants.filter(restaurant =>
                restaurant.info.name.toLowerCase().includes(searchValue) ||
                restaurant.info.cuisines.some(cuisine =>
                    cuisine.toLowerCase().includes(searchValue)
                )
            );
            setRestaurants(filteredRestaurants);
        }
    };

    const handleTopRated = () => {
        setShowTopRated(!showTopRated);
        if (!showTopRated) {
            const topRatedRestaurants = allRestaurants.filter((res) => res.info.avgRating > 4.2);
            setRestaurants(topRatedRestaurants);
        } else {
            setRestaurants(allRestaurants);
        }
    };

    const handleCardClick = (restaurant) => {
        navigate(`/restaurant/${restaurant.info.id}`);
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                {/* Search and Filter */}
                <div className="mb-6 flex items-center">
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="p-3 border-2 border-gray-300 rounded-l-lg mr-0 flex-grow focus:outline-none focus:border-orange-500"
                    />
                    <button
                        onClick={handleTopRated}
                        className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-300 border-2 border-orange-500 shadow-md"
                    >
                        {showTopRated ? "Show All" : "Top Rated"}
                    </button>
                </div>

                {/* Restaurant Grid or Shimmer */}
                {isLoading ? (
                    <Shimmer />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {restaurants && restaurants.length > 0 ? (
                            restaurants.map((restaurant, index) => (
                                <div key={restaurant.id || index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                    <RestaurantCard onClick={() => handleCardClick(restaurant)} resData={restaurant} />
                                </div>
                            ))
                        ) : (
                            <p className="text-xl text-orange-700 col-span-3 text-center">No restaurants found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home