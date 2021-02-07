import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoreResultPage from './pages/CoreResultPage';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/core-search' component={CoreResultPage} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
