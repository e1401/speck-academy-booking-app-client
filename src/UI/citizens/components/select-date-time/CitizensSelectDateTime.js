import React from 'react';

import {
  Container,
  Krug,
  Broj,
  Datum,
  Oznacite,
  Podebljano
} from './StyleCitizensSelectDateTime';

const CitizensSelectDateTime = () => (
  <Container>
    <link
      rel="stylesheet"
      media="screen"
      href="https://fontlibrary.org/face/poppins"
      type="text/css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Lora"
    />
    <Krug />
    <Broj>2</Broj>
    <Datum>Odaberite datum i vrijeme:</Datum>
    <Oznacite>
      Označite slobodan termin na kalendaru za Vaš odabir:{' '}
      <Podebljano>Konferencijska dvorana RCTP.</Podebljano>
    </Oznacite>
  </Container>
);

export default CitizensSelectDateTime;
