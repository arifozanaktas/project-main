import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
import CategoryDetail from './components/categories/CategoryDetail';
import Details from './components/detail/Details';

function App() {
  return (
<>
<Navbar/>
<CategoryDetail/>
<Footer/>
</>
  );
}

export default App;
