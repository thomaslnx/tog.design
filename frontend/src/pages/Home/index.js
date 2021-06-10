import { Container, Content, Posts, Menu } from './styles';
import Header from '../../components/Header';

import Cards from '../../components/Cards';

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Posts>
          <Cards />
        </Posts>
        <Menu />
      </Content>
    </Container>
  );
};

export default Home;
