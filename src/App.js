import './App.css';
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from './Components/primarySearchAppBar';


const Home = React.lazy(()=>
import("./Components/Home/Home"));

const renderLoader = () => <div className = 'loader'></div>;

function App() {
  return (
    <React.Suspense fallback={renderLoader()}>
          <div>
          <PrimarySearchAppBar/>
          <div>
          </div>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
          </div>

          </React.Suspense>

  );
}

export default App;
