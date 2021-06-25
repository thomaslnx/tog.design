import { FaShoppingBag } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '../../assets/tog-logo.png';

import AuthenticationButton from '../AuthenticationButton';

const Header = () => {
  const history = useHistory();
  const redirectToCart = () => history.push('/cart');
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logo} alt="tog-logo" />
        </div>
        <div className="login">
          <button className="cart" onClick={redirectToCart} type="button">
            <FaShoppingBag />
          </button>
          <AuthenticationButton />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
