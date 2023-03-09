import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
