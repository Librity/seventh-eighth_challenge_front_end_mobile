import styled from 'styled-components';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

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

export const ProductDetails = styled.View`
  margin-left: 3px;
  flex-direction: column;
  flex: 1;
`;

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

export const RemoveProduct = styled(BorderlessButton).attrs({
  borderless: true,
})`
  border: 0;
  padding: 6px;
`;

export const ProductOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #ededed;
  border-radius: 6px;
  align-items: center;
`;

export const ProductQuantityAdjustment = styled.View`
  padding: 4px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductIncrease = styled(BorderlessButton).attrs({
  borderless: true,
})`
  border: 0;
  padding: 6px;
`;

export const ProductQuantity = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #666;
  font-size: 14px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  width: 40px;
  height: 30px;
`;

export const ProductDecrease = styled(BorderlessButton).attrs({
  borderless: true,
})`
  border: 0;
  padding: 6px;
`;

export const SubTotal = styled.Text`
  margin-right: 12px;
`;

export const Footer = styled.View`
  margin-top: 15px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
`;

export const TotalText = styled.Text`
  color: #999;
`;

export const Total = styled.Text`
  margin-top: 5px;
  font-size: 28px;
`;

export const BuyButton = styled(RectButton)`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  padding: 12px 90px;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const BuyButtonLabel = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

export const EmptyCart = styled.View`
  max-height: 150px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #030204;
`;
