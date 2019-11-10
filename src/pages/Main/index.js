import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    console.tron.log(response.data);

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPricePtBr(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

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

            <AddToCartButton
              type="button"
              onClick={() => this.handleAddProduct(item.id)}
            >
              <QuantityInCartIndicator>
                <Icon name="add-shopping-cart" size={16} color="#fff" />
                <QuantityInCart>3</QuantityInCart>
              </QuantityInCartIndicator>

              <AddToCartButtonLable>ADICIONAR</AddToCartButtonLable>
            </AddToCartButton>
          </Product>
        )}
      />
    );
  }
}
