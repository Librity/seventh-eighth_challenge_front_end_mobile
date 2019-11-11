import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  background: #201d25;
  flex: 1;
  flex-direction: row;
  padding: 20px;
`;

export const Product = styled.View`
  max-width: 220px;
  max-height: 350px;
  margin-right: 20px;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const Thumbnail = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  line-height: 18px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddToCartButton = styled(RectButton)`
  background: #9159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuantityInCartIndicator = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const QuantityInCart = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const AddToCartButtonLable = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
