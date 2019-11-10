import React, { Component } from 'react';

import { Container, Name } from './styles';

export default class Main extends Component {
  state = {
    example: 'Working',
  };

  render() {
    const { example } = this.state;

    return (
      <Container>
        <Name>{example}</Name>
      </Container>
    );
  }
}
