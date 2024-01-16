import React from 'react';
import { Routes, Route, Link, BrowserRoute, BrowserRouter } from 'react-router-dom';
import { Index } from '../components/Index';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error'
 
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="index" element={<Index/>} />
            <Route path="contacto" element={<Contacto/>} />
            <Route path="articulos" element={<Articulos/>} />
            <Route path="*" element={<Error/>} />
        </Routes>

    </BrowserRouter>
  )
}
