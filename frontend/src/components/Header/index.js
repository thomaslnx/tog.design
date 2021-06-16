import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { Container, Content } from './styles';
import logo from '../../assets/tog-logo.png';

const Header = () => {
  return (
    <Container>
      <Router>
        <Content>
          <div className="logo">
            <img src={logo} alt="tog-logo" />
          </div>
          <div className="login">
            <button className="cart" type="button">
              <FaShoppingBag />
            </button>
            <Link to="/login" className="signin">
              Sign In
            </Link>
          </div>
        </Content>
      </Router>
    </Container>
  );
};

export default Header;
