import { FaTrashAlt } from 'react-icons/fa';
import { Container, CartItems, Items, Resume, Articles } from './styles';

const ShopCart = () => {
  return (
    <Container>
      <CartItems>
        <span>Your Cart</span>
        <Items>
          <header>
            <span>Aticle</span>
            <span>Author</span>
            <span>Publisher</span>
            <span>Value</span>
          </header>
          <Articles>
            <span>What was the trend in 2020 ans you didn&apos;t use it</span>
            <span>Daniel Alves</span>
            <span>Tog.design</span>
            <span>R$ 10,90</span>
            <span>
              <FaTrashAlt />
            </span>
          </Articles>
        </Items>
      </CartItems>
      <Resume />
    </Container>
  );
};

export default ShopCart;
