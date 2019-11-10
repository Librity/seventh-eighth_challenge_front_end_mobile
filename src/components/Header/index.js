import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import {
  Container,
  Main,
  Logo,
  Cart,
  ProductCircle,
  ProductCount,
} from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = page => {
    const { navigation } = this.props;

    navigation.navigate(page);
  };

  render() {
    return (
      <Container>
        <Main onPress={() => this.handleNavigate('Main')}>
          <Logo source={logo} resizeMode="contain" />
        </Main>

        <Cart onPress={() => this.handleNavigate('Cart')}>
          <Icon name="shopping-basket" size={30} color="#fff" />
          <ProductCircle>
            <ProductCount>{3}</ProductCount>
          </ProductCircle>
        </Cart>
      </Container>
    );
  }
}
