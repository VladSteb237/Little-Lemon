
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import BookingForm from './components/Booking/BookingForm';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Confirm from './components/Booking/Confirm';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/bookingform' element={<BookingForm />}></Route>
          <Route path='/confirm' element={<Confirm />}></Route>
          <Route path='/order' element={<Order />} ></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
