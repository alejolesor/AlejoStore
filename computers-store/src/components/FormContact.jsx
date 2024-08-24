/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormularioContacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !message) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (name.length < 3) {
      setError('El name debe tener al menos 3 caracteres.');
      return;
    }

    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);

    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <h2 className="formulario-titulo">Formulario de Contacto</h2>

      {error && <p className="formulario-error">{error}</p>}

      <div className="formulario-campo">
        <label htmlFor="name" className="formulario-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="formulario-input"
          placeholder="Ingresa tu name"
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="email" className="formulario-label">
          email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="formulario-input"
          placeholder="Ingresa tu email"
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="message" className="formulario-label">
          message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="formulario-textarea"
          placeholder="Ingresa tu message"
        />
      </div>

      <button type="submit" className="formulario-boton">
        Enviar
      </button>
    </form>
  );
};

export default FormularioContacto;
