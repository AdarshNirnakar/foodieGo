import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative">
                            <img
                                className="h-16 w-auto rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
                                src="https://as2.ftcdn.net/v2/jpg/02/76/34/55/1000_F_276345533_gQr0R2h68cDY1MRE1QyR7ydS2Xsiwx7T.jpg"
                                alt="Foodiego Logo"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="ml-4 text-3xl font-bold text-white tracking-wide">Foodiego</h1>
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-sm">Home</Link></li>
                            <li><Link to="/about" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-sm">About</Link></li>
                            <li><Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-sm">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header