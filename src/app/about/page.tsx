"use client";
import React from "react";
import { Globe, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#1A1A1A] text-gray-100 w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] py-16 px-4 md:px-16 rounded-b-3xl shadow-lg relative overflow-hidden w-full">
        <div className="w-full relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SMS-App</h1>
          <p className="text-lg mb-8 max-w-2xl">
            SMS-App is your go-to solution for secure, instant, and anonymous SMS verification.
            We are committed to providing our customers with top-notch service while protecting their privacy.
          </p>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20px] left-[-20px]">
            <Globe className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-[-20px] right-[-20px]">
            <Zap className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Heart className="w-16 h-16 text-white" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Founded with a vision to revolutionize online registrations, SMS-App began as a small team of dedicated professionals.
            We believed in innovation, transparency, and above all—user privacy.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Today, we have grown into a trusted platform serving thousands worldwide, continually evolving to ensure reliability, speed, and security in every SMS verification.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-800 py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            To empower our users with secure and efficient SMS verification services that protect their personal data, while delivering exceptional customer service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 mb-4 text-[#BB86FC]" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400 text-center">
                Serving customers around the globe with reliable and secure SMS verification.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 mb-4 text-[#BB86FC]" />
              <h3 className="text-xl font-semibold mb-2">Speed & Efficiency</h3>
              <p className="text-gray-400 text-center">
                Delivering SMS codes in seconds so you can register faster and smoother.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 mb-4 text-[#BB86FC]" />
              <h3 className="text-xl font-semibold mb-2">User Trust</h3>
              <p className="text-gray-400 text-center">
                We prioritize your privacy and security to ensure your data remains safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-400">
                We operate with transparency and honesty, building trust with our users and partners.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">
                Constantly pushing the boundaries to integrate cutting-edge technology into our services.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-400">
                Our users are at the heart of everything we do, inspiring continuous improvements.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-400">
                Ensuring consistent, dependable service so you can count on us whenever you need SMS verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SMS-App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
