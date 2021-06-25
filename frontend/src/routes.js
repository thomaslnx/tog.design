import { Switch, Route } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';

import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Cart from './pages/Cart';
import WriteArticle from './pages/WriteArticle';

import Loading from './components/Loading';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route
        path="/dashboard"
        component={withAuthenticationRequired(DashBoard, {
          onRedirecting: () => <Loading />,
        })}
      />
      <Route
        path="/cart"
        component={withAuthenticationRequired(Cart, {
          onRedirecting: () => <Loading />,
        })}
      />
      <Route
        path="/write-article"
        component={withAuthenticationRequired(WriteArticle, {
          onRedirecting: () => <Loading />,
        })}
      />
    </Switch>
  );
};

export default Routes;

// <Route path="/dashboard" component={DashBoard} />
// <Route path="/cart" component={Cart} />
