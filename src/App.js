import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Hotels from './views/hotels';
import Contacts from './views/contacts';
import Login from './views/login';
import Signup from './views/signup';
import Hotelinfo from './views/Hotelinfo';
import BookingForm from './views/Bookingform';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/hotelinfo/:hotelid' element={<Hotelinfo/>}/>
      <Route path='/booking/:hotelid' element={<BookingForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
