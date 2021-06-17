import { Auth0Provider } from '@auth0/auth0-react';

import Routes from './routes';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Routes />
    </Auth0Provider>
  );
}

export default App;
