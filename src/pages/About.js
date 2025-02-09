import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Foodiego: Your Premier Online Food Delivery App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Our Mission" content="Foodiego's mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience." />
        <InfoCard title="Our Reach" content="Foodiego operates in over 650 cities in India, with a large network of restaurant and delivery partners." />
        <InfoCard title="Our Innovation" content="Foodiego pioneered hyperlocal commerce in India, launching Food Delivery in 2014 and Quick Commerce in 2020." />
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Key Points</h2>
      <ul className="list-disc pl-8 mb-6 text-gray-700">
        <li className="mb-2">Foodiego is a new-age consumer-first organization offering an easy-to-use convenience platform.</li>
        <li className="mb-2">Foodiego has successfully pioneered the hyperlocal commerce industry in India.</li>
        <li className="mb-2">Foodiego has a diverse team of board members and management, including founders, executives, and independent directors.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
      <p className="mb-6 text-gray-700 bg-white p-4 rounded-lg shadow-md">
        At Foodiego, we strive to revolutionize the way people experience food delivery and quick commerce. 
        Our goal is to bring convenience to your doorstep, making everyday life easier for our customers.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Join Our Journey</h2>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md">
        We're always looking for passionate individuals to join our team and help us shape the future of 
        hyperlocal commerce. If you're interested in being part of our exciting journey, check out our 
        careers page for current opportunities.
      </p>
    </div>
  )
}

const InfoCard = ({ title, content }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
)

export default About