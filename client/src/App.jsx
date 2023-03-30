import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home'

//Lazy loading
const LazyAbout = React.lazy(() => import('./pages/About'))
const LazyServices = React.lazy(() => import('./pages/Services'))
const LazyLogin = React.lazy(() => import('./pages/Login'))


function App() {
  return (
    <>
    <Header />
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={
  <React.Suspense fallback='Loading...'>
    <LazyAbout />
  </React.Suspense>
} />
<Route path="/services" element={
  <React.Suspense fallback='Loading...'>
    <LazyServices />
  </React.Suspense>
} />
<Route path="/login" element={
  <React.Suspense fallback='Loading...'>
    <LazyLogin />
  </React.Suspense>
} />
    </Routes>
    </>
    

    
  )
}

export default App;
