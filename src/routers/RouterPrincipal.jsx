import React from 'react';
import { Route, Routes, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Index } from '../components/Index';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error'
import { PanelControl } from '../components/PanelControl';
import { Inicio } from '../components/panel/Inicio';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

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
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => isActive ? "activado" : ""} >PanelControl
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
          <Route path="persona/:nombre/:apellido" element={<Persona />} />
          <Route path="persona/:nombre" element={<Persona />} />
          <Route path="persona/" element={<Persona />} />
          <Route path="redirigir/" element={<Navigate to = "/persona/Luisa/Marin" />} />
          
          <Route path="panel/*" element={<PanelControl />} >
            <Route path="inicio/*" element={<Inicio />} />
            <Route path="crear-articulos" element={<Crear />} />
            <Route path="gestion-usuarios" element={<Gestion />} />
            <Route path="acerca-de" element={<Acerca />} />
          </Route>
          
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
