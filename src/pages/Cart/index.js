import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPricePtBr } from '../../util/format';
import {
  ProductList,
  Product,
  ProductInfo,
  Thumbnail,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  RemoveProduct,
  ProductOrder,
  ProductQuantityAdjustment,
  ProductIncrease,
  ProductQuantity,
  ProductDecrease,
  SubTotal,
  Footer,
  TotalText,
  Total,
  BuyButton,
  BuyButtonLabel,
} from './styles';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {
          id: 1,
          title: 'TÃªnis de Caminhada Leve ConfortÃ¡vel',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
        {
          id: 2,
          title: 'TÃªnis VR Caminhada ConfortÃ¡vel Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        },
        {
          id: 3,
          title: 'TÃªnis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
        },
        {
          id: 5,
          title: 'TÃªnis VR Caminhada ConfortÃ¡vel Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        },
        {
          id: 6,
          title: 'TÃªnis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
        },
        {
          id: 4,
          title: 'TÃªnis de Caminhada Leve ConfortÃ¡vel',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
      ],
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <>
        <ProductList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductInfo>
                <Thumbnail source={{ uri: item.image }} />
                <ProductDetails>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductDetails>
                <RemoveProduct>
                  <Icon name="remove-shopping-cart" size={16} color="#7159c1" />
                </RemoveProduct>
              </ProductInfo>
              <ProductOrder>
                <ProductQuantityAdjustment>
                  <ProductIncrease>
                    <Icon name="add-circle-outline" size={16} color="#7159c1" />
                  </ProductIncrease>
                  <ProductQuantity>3</ProductQuantity>
                  <ProductDecrease>
                    <Icon
                      name="remove-circle-outline"
                      size={16}
                      color="#7159c1"
                    />
                  </ProductDecrease>
                </ProductQuantityAdjustment>
                <SubTotal>$1234</SubTotal>
              </ProductOrder>
            </Product>
          )}
        />

        <Footer>
          <TotalText>TOTAL</TotalText>
          <Total>$1234</Total>
          <BuyButton>
            <BuyButtonLabel>FINALIZAR PEDIDO</BuyButtonLabel>
          </BuyButton>
        </Footer>
      </>
    );
  }
}
