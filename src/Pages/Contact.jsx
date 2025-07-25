import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar2 from '../Components/Navbar2.jsx';
import Theme from '../Contexts/Theme.jsx';
import TrackFooter from '../Components/Tracking_Page/TrackFooter.jsx';
import Done from '../Components/Done.jsx';
import ClickSpark from '../Components/Animated/ClickSpark.jsx';

const Contact = () => {
  const [isDarkMode] = useContext(Theme)
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "55b11e5c-e582-4165-bcb0-c518c033cc5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - 1F5 Courier</title>
        <meta name="description" content="Have questions or need assistance? Contact 1F5 Courier for support and inquiries about our services." />
        <meta name="keywords" content="contact 1F5 Courier, courier support, customer service, shipping inquiries" />
        <meta property="og:title" content="Contact Us - 1F5 Courier" />
        <meta property="og:description" content="Have questions or need assistance? Contact 1F5 Courier for support and inquiries about our services." />
        <meta property="og:image" content="https://1f5.in/favioc/favicon.ico" />
        <meta property="og:url" content="https://1f5.in/contactus" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ClickSpark 
  sparkColor= {`${isDarkMode ? '#fff' : '#000'}`}
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
      <Navbar2  />
      <div
        className={`min-h-screen py-16 px-6 ${
          isDarkMode ? 'bg-[#111827] text-gray-300' : 'bg-[#F4F7FF] text-gray-800'
        }`}
      >
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Contact Us
          </h1>
          <p className="text-center mb-12 text-lg leading-relaxed">
            Have questions or need assistance? Feel free to reach out to us. We’d love to hear from you!
          </p>

          {result ?  <Done/> :  <form
            className={`bg-${
              isDarkMode ? 'gray-800' : 'white'
            } p-8 rounded-lg shadow-lg`}
          
            onSubmit={onSubmit}
          >
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name = "name"
                required
                placeholder="Enter Your Name"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 focus:ring-primary'
                    : 'bg-gray-100 text-gray-800 border-gray-300 focus:ring-primary'
                }`}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                 name = "email"
                 required
                placeholder="Enter Your Email"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 focus:ring-primary'
                    : 'bg-gray-100 text-gray-800 border-gray-300 focus:ring-primary'
                }`}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-semibold"
               htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                 name = "Messsage"
                 required
                  placeholder="Enter Your Message"
                rows="5"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 focus:ring-primary'
                    : 'bg-gray-100 text-gray-800 border-gray-300 focus:ring-primary'
                }`}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`px-6 py-3 font-semibold rounded-lg shadow transition duration-300 ${
                  isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:shadow-xl hover:bg-gray-600'
            : '  text-black bg-sky-400 hover:shadow-xl'
                }`}
              >
                Submit
              </button>
            </div>
          </form>} 
         
        </div>
        <div className="mt-auto">
        <TrackFooter />
      </div>
      </div>
      </ClickSpark>
 
  </>
  );
};

export default Contact;
