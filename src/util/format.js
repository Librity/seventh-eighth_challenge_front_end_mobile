import React from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native';

export function formatPricePtBr(price) {
  return (
    <NumberFormat
      value={price}
      displayType="text"
      prefix="R$ "
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      renderText={value => <Text>{value}</Text>}
    />
  );
}
