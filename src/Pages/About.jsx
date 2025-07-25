import React, { useContext } from 'react'
import Navbar2 from '../Components/Navbar2.jsx'
import Footer from '../Components/Landing_page/Footer.jsx'
import { Link } from 'react-router-dom'
import Theme from '../Contexts/Theme.jsx'
import TrackFooter from '../Components/Tracking_Page/TrackFooter.jsx'
import { Helmet } from 'react-helmet-async';
import ClickSpark from '../Components/Animated/ClickSpark.jsx'

const About = ( ) => {

  const [isDarkMode] = useContext(Theme)


  return (
    <>
      <Helmet>
        <title>About Us - 1F5 Courier</title>
        <meta name="description" content="Learn more about 1F5 Courier, our mission, vision, and the services we offer to make your shipping experience seamless." />
        <meta name="keywords" content="about 1F5 Courier, courier company, logistics company, shipping services" />
        <meta property="og:title" content="About Us - 1F5 Courier" />
        <meta property="og:description" content="Learn more about 1F5 Courier, our mission, vision, and the services we offer to make your shipping experience seamless." />
        <meta property="og:image" content="https://1f5.in/favioc/favicon.ico" />
        <meta property="og:url" content="https://1f5.in/aboutus" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ClickSpark
  sparkColor= {`${isDarkMode ? '#fff' : '#000'}`}
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
      <Navbar2/>
      <main
  className={`${
    isDarkMode ? 'bg-[#111827] text-gray-300' : 'bg-[#F4F7FF] text-gray-800'
  } min-h-screen`}
>
  <div className="container mx-auto px-6 py-12 lg:px-20">
    {/* Hero Section */}
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        About Us
      </h1>
      <p className="text-lg leading-relaxed">
        Welcome to <strong>1F5 Courier</strong>, your trusted partner in delivering packages with speed, reliability, and care.
        We are committed to providing exceptional service, ensuring that packages reach their destinations safely and on time.
      </p>
    </section>

    {/* Our Mission */}
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg leading-relaxed">
        At <strong>1F5 Courier</strong>, our mission is to revolutionize the logistics industry by offering a seamless,
        efficient, and customer-centric experience. We aim to build lasting relationships with our clients based on trust,
        transparency, and exceptional service.
      </p>
    </section>

    {/* Our Services */}
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
      <p className="text-lg leading-relaxed">
        We offer a wide range of courier services tailored to meet the unique needs of our clients. Whether it's local delivery,
        national shipping, or international freight, we have the expertise and resources to handle it all.
      </p>
    </section>

    {/* Highlighted Stats */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div
        className={`p-6 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
        }`}
      >
        <h3 className="text-2xl font-bold">10,000+</h3>
        <p>Happy Clients</p>
      </div>
      <div
        className={`p-6 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
        }`}
      >
        <h3 className="text-2xl font-bold">500+</h3>
        <p>Locations Covered</p>
      </div>
      <div
        className={`p-6 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
        }`}
      >
        <h3 className="text-2xl font-bold">99.9%</h3>
        <p>Delivery Success</p>
      </div>
    </section>

    {/* Call to Action */}
    <section className="text-center mt-12">
      <p className="text-lg leading-relaxed mb-4">
        Ready to experience hassle-free courier services? Get started with 1F5 Courier today!
      </p>
      <Link
      to="/contactus"
        className={`px-8 py-3 font-semibold rounded-lg shadow-lg transition duration-300 ${
          isDarkMode
            ? 'bg-gray-700 text-gray-300 hover:shadow-xl hover:bg-gray-600'
            : 'text-black bg-blue-400 hover:shadow-xl'
        }`}
      >
        Get in Touch with Us
      </Link>
    </section>
  </div>
  <TrackFooter/>
</main>
      </ClickSpark>
   

    </>
  )
}

export default About