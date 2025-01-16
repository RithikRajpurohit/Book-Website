import React from 'react'

const About = () => {
  return (
 


    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6 mt-16">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://www.bookswagon.com/images/abouticon1.png"
              alt="Book Store"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to our Book Store! We are passionate about connecting readers with
              their favorite books and helping authors share their stories with the
              world. Whether you're a casual reader or a literary enthusiast, you'll
              find something to love here.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our platform allows users to easily upload and manage their book
              collections, while offering a seamless experience for browsing and
              discovering new titles. We're committed to fostering a vibrant
              community of book lovers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Thank you for choosing our Book Store. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About
