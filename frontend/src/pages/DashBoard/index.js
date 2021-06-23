import { useAuth0 } from '@auth0/auth0-react';

import Loading from '../../components/Loading';
import CartButton from '../../components/CartButton';
import BestSellersTable from '../../components/BestSellersTable';
import Chart from '../../components/Chart';
import DashboardMenu from '../../components/DashboardMenu';

import {
  LoadContainer,
  Container,
  Header,
  ButtonsContainer,
  WriteNowButton,
  Content,
  Graph,
  BestSellers,
  AsideMenu,
} from './styles';
import AuthenticationButton from '../../components/AuthenticationButton';
import logo from '../../assets/tog-logo.png';

const DashBoard = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <LoadContainer>
        <Loading />
      </LoadContainer>
    );
  }
  return (
    <Container>
      <Header>
        <img src={logo} alt="togdesign logo" />
        <ButtonsContainer>
          <WriteNowButton>Write now</WriteNowButton>
          <CartButton />
          <AuthenticationButton />
        </ButtonsContainer>
      </Header>
      <Content>
        <Graph className="graph">
          <span>Your sales for the last 7 days</span>
          <Chart />
        </Graph>
        <BestSellers className="best">
          <span>Your best sellers</span>
          <BestSellersTable />
        </BestSellers>
        <AsideMenu className="menu">
          <DashboardMenu />
        </AsideMenu>
      </Content>
    </Container>
  );
};

export default DashBoard;
