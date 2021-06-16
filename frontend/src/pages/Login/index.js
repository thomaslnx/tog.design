import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Container, Header, Form } from './styles';
import logo from '../../assets/tog-logo.png';

const Login = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="togdesign logo" />
      </Header>
      <Form>
        <header>Sign in</header>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />

        <Router>
          <Link to="/">Forgot your password?</Link>
        </Router>

        <button type="submit">Sign in</button>
      </Form>
    </Container>
  );
};

export default Login;
