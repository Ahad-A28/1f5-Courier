import React, { lazy, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Components/Login'
import Admin from '../Components/Admin/Admin.jsx'
import Theme from '../Contexts/Theme.jsx';
 

const App = lazy(() => import('../App.jsx'));
const Track = lazy(() => import('../Components/Tracking_Page/TrackYourParcle.jsx'));
const About = lazy(() => import('../Pages/About.jsx'));
const Contact = lazy(() => import('../Pages/Contact.jsx'));
const URL = () => {
const [isDarkMode] = useContext(Theme);
  return (

    <>

    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/track" element={<Track />} />
    <Route path="/aboutus" element={<About />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/login" element={<Login />} />
<Route path="/admin" element={<Admin />} />
  </Routes>
 
  </>
  )
}

export default URL