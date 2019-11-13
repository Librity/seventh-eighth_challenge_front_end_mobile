import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from '../../services/navigation';
import logo from '../../assets/images/logo.png';

import {
  Container,
  Main,
  Logo,
  Cart,
  ProductCircle,
  ProductCount,
} from './styles';

export default function Header() {
  const cartItemsCount = useSelector(state => state.cart.length);

  const handleNavigate = page => {
    navigate(page);
  };

  return (
    <Container>
      <Main onPress={() => handleNavigate('Home')}>
        <Logo source={logo} resizeMode="contain" />
      </Main>

      <Cart onPress={() => handleNavigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <ProductCircle>
          <ProductCount>{cartItemsCount}</ProductCount>
        </ProductCircle>
      </Cart>
    </Container>
  );
}
