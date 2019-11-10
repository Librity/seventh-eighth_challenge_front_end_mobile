import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 60px;
  background: #1b191f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled(RectButton)`
  width: 220px;
  height: 40px;
  border: 0;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 30px;
  align-self: center;
`;

export const Cart = styled(RectButton)`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const ProductCircle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3px;
  right: -3px;
  background: #9159c1;
  color: #fff;
  width: 16;
  height: 16;
  border-radius: 8px;
`;

export const ProductCount = styled.Text`
  z-index: 2;
  font-size: 13px;
  color: #fff;
`;
