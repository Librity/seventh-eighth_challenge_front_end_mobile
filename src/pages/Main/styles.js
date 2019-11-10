import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Global = styled.View`
  background: #17161b;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const Thumbnail = styled.Image`
 width: 64px;
  height: 64px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddToCartButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #3f76cf;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const QuantityInCartIndicator = styled.View`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const QuantityInCart = styled.Text``;

export const AddToCartButtonLable = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
