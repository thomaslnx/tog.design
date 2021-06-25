import AsideArticleMenu from '../../components/AsideArticleMenu';

import { Container, Header, Content, Footer } from './styles';
import logo from '../../assets/tog-logo.png';

const ShopCart = () => {
  return (
    <Container>
      <Header>
        <div className="logo">
          <img src={logo} alt="tog logo" />
        </div>
        <div className="action-buttons">
          <button className="cancel" type="button">
            Cancel
          </button>
          <button className="publish" type="button">
            Publish
          </button>
        </div>
      </Header>
      <Content>
        <div className="title">
          <input type="text" placeholder="Title" />
        </div>
        <AsideArticleMenu />
      </Content>
      <Footer />
    </Container>
  );
};

export default ShopCart;
