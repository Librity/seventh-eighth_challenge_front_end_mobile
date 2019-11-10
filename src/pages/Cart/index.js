import React, { Component } from 'react';

import { Container, Title } from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: 'test',
    };
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Title>{products}</Title>
      </Container>
    );
  }
}
