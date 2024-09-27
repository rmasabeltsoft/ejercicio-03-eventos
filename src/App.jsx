import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// Este es otro comentario

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Fundamentos de GitHub Actions y Eventos</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
