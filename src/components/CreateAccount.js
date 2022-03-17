import React from 'react'
import '../styles/CreateAccount.css'

export const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Mi cuenta</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Nombre</label>
            <input type="text" id="name" placeholder="Tech" className="input input-name" />

            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" placeholder="ejemplo@hacker.com" className="input input-email" />

            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" minLength={3}/>
          </div>

          <input type="submit" value="Crear cuenta" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}
