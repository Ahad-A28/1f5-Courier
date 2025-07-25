import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import Theme from './Contexts/Theme.jsx';
import { AuthProvider } from "./hooks/Auth";
import Loading from './Components/Loading.jsx';
import { HelmetProvider } from 'react-helmet-async';
import URL from './Routes/Route.jsx';
import Loading1 from './Components/Loading.jsx';



function Root() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <AuthProvider>
      <Theme.Provider value={[isDarkMode, setIsDarkMode]}>
        <HelmetProvider>
          <BrowserRouter>
            <Suspense fallback={<Loading1 />}>
             <URL/>
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </Theme.Provider>
    </AuthProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);