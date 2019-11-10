import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  background: #201d25;
  flex: 1;
  padding: 30px;
  margin-top: 20px;
  border-radius: 4px;
`;

export const Product = styled.View`
  flex-direction: column;
  max-width: 220px;
  max-height: 350px;
  background: #fff;
  padding: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const Thumbnail = styled.Image``;

export const ProductDetails = styled.View``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text``;

export const RemoveProduct = styled(RectButton)``;

export const ProductOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductQuantityAdjustment = styled.View`
  flex-direction: row;
`;

export const ProductIncrease = styled(RectButton)``;

export const ProductQuantity = styled.TextInput``;

export const ProductDecrease = styled(RectButton)``;

export const SubTotal = styled.Text``;

export const Footer = styled.View`
  flex-direction: column;
`;

export const TotalText = styled.Text``;

export const Total = styled.Text``;

export const BuyButton = styled(RectButton)``;

export const BuyButtonLabel = styled.Text``;
