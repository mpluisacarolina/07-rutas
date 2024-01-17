import React from 'react';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import { Index } from '../components/Index';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink
              to="/Index"
              className={({ isActive }) => isActive ? "activado" : ""} >Index
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Articulos"
              className={({ isActive }) => isActive ? "activado" : ""} >Artículos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contacto"
              className={({ isActive }) => isActive ? "activado" : ""} >Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section className="contenido-principal">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="index" element={<Index />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="articulos" element={<Articulos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <hr />
      <footer>
        Este es el pie de Página
      </footer>
    </BrowserRouter>
  )
}
