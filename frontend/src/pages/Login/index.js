import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Container, Header, Form } from './styles';
import logo from '../../assets/tog-logo.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <Header>
        <img src={logo} alt="togdesign logo" />
      </Header>
      <Form>
        <header>Sign in</header>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />

        <Link to="/">Forgot your password?</Link>

        <button
          type="button"
          onClick={() =>
            loginWithRedirect({
              appState: {
                returnTo: '/dashboard',
              },
            })
          }
        >
          Sign in
        </button>
      </Form>
    </Container>
  );
};

export default Login;
