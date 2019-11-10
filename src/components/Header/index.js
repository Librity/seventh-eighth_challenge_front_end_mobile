import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SvgUri } from 'react-native-svg';

import { Container, Main, Cart, ProductCircle, ProductCount } from './styles';

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
          <SvgUri
            width="180%"
            height="180%"
            uri="https://skylab.rocketseat.com.br/api/files/1562597403849.svg"
          />
        </Main>

        <Cart onPress={() => this.handleNavigate('Cart  ')}>
          <Icon name="shopping-basket" size={30} color="#fff" />
          <ProductCircle>
            <ProductCount>{3}</ProductCount>
          </ProductCircle>
        </Cart>
      </Container>
    );
  }
}
