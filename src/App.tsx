import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
