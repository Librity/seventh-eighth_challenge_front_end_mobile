import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPricePtBr } from '../../util/format';
import api from '../../services/api';

import {
  ProductList,
  Product,
  Thumbnail,
  Title,
  Price,
  AddToCartButton,
  QuantityInCartIndicator,
  QuantityInCart,
  AddToCartButtonLable,
} from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPricePtBr(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = async id => {
    const { addToCartRequest, navigation } = this.props;

    await addToCartRequest(id);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList
        horizontal
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <Thumbnail source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.formattedPrice}</Price>

            <AddToCartButton onPress={() => this.handleAddProduct(item.id)}>
              <QuantityInCartIndicator>
                <Icon name="add-shopping-cart" size={16} color="#fff" />
                <QuantityInCart>{amount[item.id] || 0}</QuantityInCart>
              </QuantityInCartIndicator>

              <AddToCartButtonLable>ADICIONAR</AddToCartButtonLable>
            </AddToCartButton>
          </Product>
        )}
      />
    );
  }
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.shape().isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
