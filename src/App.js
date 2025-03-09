import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateAccount from './pages/createAccount'
import { Link , BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <section className="text-center">
        <h1 className='display-1 mb-5'>AchievThis</h1>
        <h2 className="mb-4">O que você faz importa</h2>
      
          <div>
          
            <Link to='/createAccount' className="btn btn-primary btn-lg mx-2">Criar conta</Link>
            <a href="#" className="btn btn-secondary btn-lg mx-2">Entrar</a>
          
          </div>
        </section>
        </div>

      <Routes>
        
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      
      
      </>
  );
}

export default App;
