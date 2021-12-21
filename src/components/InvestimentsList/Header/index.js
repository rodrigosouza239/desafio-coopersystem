import React from 'react';

import { Container, Title } from './styles';

import YellowLine from '~/components/InvestimentsList/YellowLine';

export default function Header({
  leftTitle = '',
  rightTitle = '',
  renderBottomLine = true,
}) {
  return (
    <>
      {renderBottomLine && <YellowLine />}
      <Container>
        <Title>{leftTitle}</Title>
        <Title>{rightTitle}</Title>
      </Container>
    </>
  );
}
