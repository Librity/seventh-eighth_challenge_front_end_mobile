import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container1 = styled.View`
  flex: 1;
  background: #201d25;
  padding: 20px;
`;

export const Container2 = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  background: #fff;
  padding: 5px;
  border-radius: 4px;
`;

export const Product = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 5px;
  background: #fff;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductDetails = styled.View``;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const RemoveProduct = styled(RectButton)``;

export const ProductOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #ededed;
  border-radius: 6px;
  align-items: center;
`;

export const ProductQuantityAdjustment = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductIncrease = styled(RectButton)`
  background: none;
  border: 0;
  padding: 6px;
`;

export const ProductQuantity = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 10px;
`;

export const ProductDecrease = styled(RectButton)`
  background: none;
  border: 0;
  padding: 6px;
`;

export const SubTotal = styled.Text`
  color: #333;
`;

export const Footer = styled.View`
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
`;

export const TotalText = styled.Text`
  color: #999;
`;

export const Total = styled.Text`
  font-size: 28px;
`;

export const BuyButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
`;

export const BuyButtonLabel = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;
