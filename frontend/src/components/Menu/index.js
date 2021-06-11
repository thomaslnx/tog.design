import { Container, List } from './styles';

const Menu = () => {
  return (
    <Container>
      <List>
        <li>
          <p className="item">01</p>
          <div className="description">
            <p className="title">Emerging, identifying</p>
            <p className="field">Strategy</p>
          </div>
        </li>

        <li>
          <p className="item yellow">02</p>
          <div className="description">
            <p className="title">Research, Design and Validation</p>
            <p className="field">Design</p>
          </div>
        </li>

        <li>
          <p className="item">03</p>
          <div className="description">
            <p className="title"> From a ideation to a product</p>
            <p className="field">Development</p>
          </div>
        </li>
      </List>
    </Container>
  );
};

export default Menu;
