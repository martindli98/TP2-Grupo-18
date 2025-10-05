import React from 'react';
import { FaDumbbell, FaUserFriends, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const GymLandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Header */}
      {/* <header className="sticky top-0 z-50 bg-black shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">GYM ZONE</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500">Classes</a>
            <a href="#" className="hover:text-orange-500">Trainers</a>
            <a href="#" className="hover:text-orange-500">Membership</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </div>
        </nav>
      </header> */}

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Gym Background" className="w-full h-full object-cover" />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Body</h1>
          <p className="text-xl mb-8">Join GYM ZONE and achieve your fitness goals</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">Get Started</button>
        </div>
      </section> */}

      {/* Classes Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Weightlifting', 'Cardio', 'Yoga'].map((className) => (
              <div key={className} className="bg-black rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.unsplash.com/photo-${className === 'Weightlifting' ? '1534367610401-9f5ed68180aa' : className === 'Cardio' ? '1517836357463-d25dfeac3438' : '1588286011487-dd1b624b1a3d'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} alt={className} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{className}</h3>
                  <p className="text-gray-400 mb-4">Join our expert-led {className.toLowerCase()} classes and push your limits.</p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">View Schedule</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-400 mb-4">"GYM ZONE has completely transformed my fitness journey. The trainers are amazing and the community is so supportive!"</p>
                <div className="flex items-center">
                  <img src={`https://images.unsplash.com/photo-${index === 1 ? '1494790108377-be9c29b29330' : index === 2 ? '1507003211169-0a1dd7228f2d' : '1506794778202-cad84cf45f1d'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60`} alt="Member" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-orange-500">Member since 2020</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About GYM ZONE</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Gym Interior" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-gray-400 mb-6">At GYM ZONE, we're dedicated to helping you achieve your fitness goals. Our state-of-the-art facilities and expert trainers are here to support you every step of the way.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaDumbbell className="text-orange-500 mr-2" />
                  <span>Top-of-the-line equipment</span>
                </li>
                <li className="flex items-center">
                  <FaUserFriends className="text-orange-500 mr-2" />
                  <span>Expert personal trainers</span>
                </li>
                <li className="flex items-center">
                  <FaCalendarAlt className="text-orange-500 mr-2" />
                  <span>Flexible class schedules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-gray-900 rounded" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-900 rounded" />
                <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 bg-gray-900 rounded"></textarea>
                <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaPhoneAlt className="text-orange-500 mr-2" />
                  <span>+1 (123) 456-7890</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" />
                  <span>info@gymzone.com</span>
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  <span>123 Fitness Street, Muscle City, ST 12345</span>
                </p>
              </div>
              <div className="mt-8">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2168266561686!2d-73.98678668459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623252320635!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">GYM ZONE</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
              <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 GYM ZONE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymLandingPage;