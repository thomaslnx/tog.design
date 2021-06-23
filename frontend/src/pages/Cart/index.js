import { FaTrashAlt } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Container,
  CartItems,
  Items,
  Resume,
  Articles,
  Content,
} from './styles';

import CartButton from '../../components/CartButton';
import AuthenticationButton from '../../components/AuthenticationButton';
import logo from '../../assets/tog-logo.png';
import { LoadContainer } from '../DashBoard/styles';
import Loading from '../../components/Loading';

const Cart = () => {
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
      <CartItems>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span className="title">Your Cart</span>
        <Items>
          <header>
            <span className="article">Aticle</span>
            <span className="author">Author</span>
            <span className="publisher">Publisher</span>
            <span className="value">Value</span>
          </header>
          <Articles>
            <div>
              <span className="article">
                <p>What was the trend in 2020 and you didn&apos;t use it</p>
              </span>
              <span className="author">Daniel Alves</span>
              <span className="publisher">Tog.design</span>
              <span className="value">R$ 10,90</span>
            </div>

            <button type="button" className="trash">
              <FaTrashAlt />
            </button>
          </Articles>
          <Articles>
            <div>
              <span className="article">
                <p>What was the trend in 2020 and you didn&apos;t use it</p>
              </span>
              <span className="author">Daniel Alves</span>
              <span className="publisher">Tog.design</span>
              <span className="value">R$ 10,90</span>
            </div>
            <button type="button" className="trash">
              <FaTrashAlt />
            </button>
          </Articles>
        </Items>
        <div className="articles-resume">
          <div>
            <span className="subtotal">Subtotal</span>
            <span className="subtotal-value">R$ 29,80</span>
          </div>
        </div>
      </CartItems>
      <Resume>
        <header>
          <CartButton />

          <AuthenticationButton />
        </header>
        <Content>
          <span>Resume</span>

          <div className="cart-resume">
            <label htmlFor="input">
              <span className="discount-label">Discount coupon</span>
              <input type="text" placeholder="reading10" />
            </label>
          </div>

          <div className="subtotal">
            <div className="values">
              <span className="title">Subtotal</span>
              <span className="value">R$ 29,80</span>
            </div>
            <div className="values">
              <span className="title">Discount</span>
              <span className="value">R$ 2,98</span>
            </div>
          </div>

          <div className="total">
            <span className="title">Total</span>
            <span>R$ 26,82</span>
          </div>

          <div className="buy-buttons">
            <button className="checkout" type="button">
              CHECKOUT
            </button>
            <button className="keep-buying" type="button">
              KEEP BUYING
            </button>
          </div>
        </Content>
      </Resume>
    </Container>
  );
};

export default Cart;
