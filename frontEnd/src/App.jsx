import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Employee from './Employee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AddEmployee from './AddEmployee';




function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            
            <Route path='' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/employee' element={<Employee/>}/>
            <Route path='/create' element={<AddEmployee/>}/>
            

          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
