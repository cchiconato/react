import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.min.css';
import './css/estilos.css';

class App extends Component {
  render() {
    return (

      <header>

            <div className="container topCasaFina-bannerWrapper">
              <div className="topCasaFina-banner">
                <form className="form-signin">
                <h2 className="form-signin-heading">Login</h2>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                <button className="btn btn-primary btn-lg">Entrar</button>
                  </form>
              </div>
            </div>

      </header>
    );
  }
}

export default App;
