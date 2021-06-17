import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './styles';

const HeaderLoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Sign in</Button>;
};

export default HeaderLoginButton;
