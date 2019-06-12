import React from 'react';

import {
  Container,
  Button,
  ButtonText,
  StyledLink
} from './SuccessUnsuccessStyle';

const Successfull = () => (
  <Container>
    <Title>Potvrda</Title>
    <Description>Vaš zahtijev za rezervaciju je poslan.</Description>

    <StyledLink to="">
      <Button>
        <ButtonText>U REDU</ButtonText>
      </Button>
    </StyledLink>
  </Container>
);

export default Successfull;
