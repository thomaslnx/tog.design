import { FaShoppingBag } from 'react-icons/fa';
import { Container, Content } from './styles';
import logo from '../../assets/tog-logo.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logo} alt="tog-logo" />
        </div>
        <div className="login">
          <button className="cart" type="button">
            <FaShoppingBag />
          </button>
          <button className="signin" type="button">
            Sign In
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
