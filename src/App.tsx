import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Articles from './pages/Articles';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/articles' component={Articles} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
