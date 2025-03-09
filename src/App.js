import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <section className="text-center">
        <h1 className='display-1 mb-5'>AchievThis</h1>
        <h2 className="mb-4">O que você faz importa</h2>
        <div>
          <a href="#" className="btn btn-primary btn-lg mx-2">Criar conta</a>
          <a href="#" className="btn btn-secondary btn-lg mx-2">Entrar</a>
        </div>
      </section>
    </div>
  );
}

export default App;
