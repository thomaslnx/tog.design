import { useAuth0 } from '@auth0/auth0-react';

import CartButton from '../../components/CartButton';

import {
  Container,
  Header,
  ButtonsContainer,
  WriteNowButton,
  Content,
  Graph,
  BestSellers,
  AsideMenu,
} from './styles';
import LogoutButton from '../../components/LogoutButton';
import logo from '../../assets/tog-logo.png';

const DashBoard = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>carregando...</h1>;
  }
  return (
    <Container>
      <Header>
        <img src={logo} alt="togdesign logo" />
        <ButtonsContainer>
          <WriteNowButton>Write now</WriteNowButton>
          <CartButton />
          <LogoutButton />
        </ButtonsContainer>
      </Header>
      <Content>
        <Graph />
        <BestSellers />
        <AsideMenu />
      </Content>
    </Container>
  );
};

export default DashBoard;
