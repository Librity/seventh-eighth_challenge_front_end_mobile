import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const productAmount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  useEffect(() => {
    const componentDidMount = async () => {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPricePtBr(product.price),
      }));

      setProducts(data);
    };

    componentDidMount();
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

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

          <AddToCartButton onPress={() => handleAddProduct(item.id)}>
            <QuantityInCartIndicator>
              <Icon name="add-shopping-cart" size={16} color="#fff" />
              <QuantityInCart>{productAmount[item.id] || 0}</QuantityInCart>
            </QuantityInCartIndicator>

            <AddToCartButtonLable>ADICIONAR</AddToCartButtonLable>
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
