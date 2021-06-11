import { Container, Content, Posts } from './styles';
import Header from '../../components/Header';

import Cards from '../../components/Cards';
import Menu from '../../components/Menu';

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
