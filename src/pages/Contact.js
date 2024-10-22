import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Connect With Us</h1>
      <p className="mb-8 text-gray-700">
        Have questions or need assistance? Reach out to us anytime. We're here to help you succeed.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ContactInfo
          title="Customer Support"
          info="support@foodiego.com"
        />
        <ContactInfo
          title="Business Inquiries"
          info="partners@foodiego.com"
        />
        <ContactInfo
          title="Phone"
          info="+1 (555) 123-4567"
        />
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

const ContactInfo = ({ title, info }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{info}</p>
  </div>
)

export default Contact