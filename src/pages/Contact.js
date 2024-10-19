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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact Foodiego</h1>
      <p className="mb-6 text-gray-700">
        We'd love to hear from you! Whether you have a question about our services, 
        want to partner with us, or just want to say hello, feel free to reach out.
      </p>
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Other Ways to Reach Us</h2>
        <p className="text-gray-700">
          <strong>Customer Support:</strong> support@foodiego.com<br />
          <strong>Business Inquiries:</strong> partners@foodiego.com<br />
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
      </div>
    </div>
  )
}

export default Contact