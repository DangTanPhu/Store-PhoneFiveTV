import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';   
const AppRouters = () => {
    return (
      <Routers>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routers>
        );
    };
    
    export default AppRouters;