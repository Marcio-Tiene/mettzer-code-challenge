import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoreResultPage from './pages/CoreResultPage';
import Error404 from './pages/Error404';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/core-search' component={CoreResultPage} exact />
          <Route path='/favorites/:id' component={Favorites} exact />
          <Route path='/error' component={Error404} exact />
          <Route component={Error404} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
