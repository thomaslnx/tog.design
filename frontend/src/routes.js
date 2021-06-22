import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Cart from './pages/Cart';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
