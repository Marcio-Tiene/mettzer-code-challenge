import Logo from './assets/img/logo_mettzer.svg';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <img src={Logo} alt='logo' />
      <h1>Hello Mettzer</h1>
    </>
  );
}

export default App;
