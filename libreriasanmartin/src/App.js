import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Librería San Martín</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="hero">
        <h2>Bienvenido a Librería San Martín</h2>
        <p>Tu lugar de confianza para libros, útiles escolares y mucho más.</p>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="catalogo">
        <h2>Catálogo</h2>
        <div className="productos">
          <div className="card">
            <h3>Novelas</h3>
            <p>Descubre las mejores historias.</p>
          </div>
          <div className="card">
            <h3>Útiles Escolares</h3>
            <p>Todo lo que necesitás para la escuela.</p>
          </div>
          <div className="card">
            <h3>Libros de Estudio</h3>
            <p>Material de apoyo para aprender más.</p>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una librería con años de experiencia brindando el mejor
          servicio en libros y útiles. ¡Gracias por confiar en nosotros!
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contacto">
        <h2>Contacto</h2>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Tu mensaje" rows="5"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Librería San Martín - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
