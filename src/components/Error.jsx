import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <strong>Página no Existe</strong>
        <Link to = "/Index"> Volver al Index</Link>
    </div>
  )
}
