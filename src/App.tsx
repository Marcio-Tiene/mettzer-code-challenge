import Logo from './assets/img/logo_mettzer-dark-bg.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header' style={{ backgroundColor: 'grey' }}>
        <img src={Logo} alt='logo' />
        <h1>Hello Mettzer</h1>
      </header>
    </div>
  );
}

export default App;
