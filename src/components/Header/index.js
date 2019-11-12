import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = page => {
    const { navigation } = this.state;

    navigation.navigate(page);
  };

  render() {
    const { cartItemsCount } = this.state;
    return (
      <Container>
        <Main onPress={() => this.handleNavigate('Home')}>
          <Logo source={logo} resizeMode="contain" />
        </Main>

        <Cart onPress={() => this.handleNavigate('Cart')}>
          <Icon name="shopping-basket" size={30} color="#fff" />
          <ProductCircle>
            <ProductCount>{cartItemsCount}</ProductCount>
          </ProductCircle>
        </Cart>
      </Container>
    );
  }
}

export default connect(state => ({
  cartItemsCount: state.cart.length,
}))(Header);
