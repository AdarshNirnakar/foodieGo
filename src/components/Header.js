import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img
                            className="h-8 w-auto"
                            src="https://as2.ftcdn.net/v2/jpg/02/76/34/55/1000_F_276345533_gQr0R2h68cDY1MRE1QyR7ydS2Xsiwx7T.jpg"
                            alt="Foodiego Logo"
                        />
                        <span className="ml-2 text-xl font-semibold text-gray-800">Foodiego</span>
                    </Link>

                    <nav>
                        <ul className="flex items-center space-x-6">
                            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
                            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
                            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header