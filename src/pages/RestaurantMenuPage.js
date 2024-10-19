import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenuPage = () => {
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getRestaurantData();
    }, [id])

    const getRestaurantData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await response.json();
            const menuCards = json?.data?.cards.find(card => card.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            
            if (!menuCards) {
                throw new Error('Menu data not found');
            }

            const menuCategories = menuCards
                .filter(card => card.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
                .map(card => ({
                    name: card.card.card.title,
                    items: card.card.card.itemCards.map(item => item.card.info)
                }));

            setCategories(menuCategories);
            setMenu(menuCategories.flatMap(category => category.items));
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
            // You might want to set an error state here and display it to the user
        }
    }

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-lg text-orange-600">{item.name}</h3>
                        <span className="text-orange-500 font-medium">₹{item.price / 100}</span>
                    </div>
                </div>
                {item.description && (
                    <p className="text-sm text-gray-600 mt-2">{item.description.split('.')[0]}.</p>
                )}
            </li>
        ));
    }

    const categorizeMenu = () => {
        return categories;
    }

    const toggleCategory = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    }

    return (
        <div className="container mx-auto p-4 bg-gradient-to-r from-yellow-100 to-orange-100">
            <h2 className="text-3xl font-bold mb-6 text-orange-800">Menu</h2>
            <ul className="space-y-4">
                {categorizeMenu().map((category) => (
                    <li key={category.name} className="border rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-yellow-100 to-orange-100">
                        <div 
                            className="bg-orange-500 text-white p-3 cursor-pointer hover:bg-orange-600 transition duration-300"
                            onClick={() => toggleCategory(category.name)}
                        >
                            <h3 className="text-xl font-semibold">{category.name} <span className="text-sm">({category.items.length} items)</span></h3>
                        </div>
                        {expandedCategory === category.name && (
                            <ul className="list-none p-4">
                                {renderMenuItems(category.items)}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenuPage