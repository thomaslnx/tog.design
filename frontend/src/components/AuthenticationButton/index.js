import { useAuth0 } from '@auth0/auth0-react';

import HeaderLoginButton from '../HeaderLoginButton';
import LogoutButton from '../LogoutButton';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <HeaderLoginButton />;
};

export default AuthenticationButton;
