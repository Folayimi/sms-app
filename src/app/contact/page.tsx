"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (replace with your API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-[#1A1A1A] text-gray-100 w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] py-16 px-4 md:px-16 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="w-full relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We would love to hear from you. Whether you have a question about
            our services or need assistance, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            {success && (
              <div className="mb-4 p-4 bg-green-600 text-white rounded">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-[#7E57C2] to-[#BB86FC] text-white font-bold rounded-lg hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-[#BB86FC]" />
              <div>
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="text-gray-400">support@sms-app.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-[#BB86FC]" />
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="text-gray-400">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-[#BB86FC]" />
              <div>
                <h3 className="text-xl font-bold">Visit Us</h3>
                <p className="text-gray-400">
                  123 SMS App Street, Tech City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SMS-App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
