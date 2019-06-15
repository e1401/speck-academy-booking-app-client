import React from 'react';

import {
  MainContainer,
  CricleMark,
  NumberMark,
  MainHeader,
  MainDescription,
  FormContainer,
  FormHeader,
  FormContainerInfoGroup,
  FormInput,
  FormInputText,
  FormInputTextCharacterCounter,
  FormInlineLabel,
  FormInlineInput
} from './CitizensEditEventInfoStyle';

export default ({ handleChange, post }) => {
  return (
    <MainContainer>
      <CricleMark>
        <NumberMark>3</NumberMark>
      </CricleMark>
      <MainHeader>Podaci o događaju i Vama</MainHeader>
      <MainDescription>
        Recite nam ime svog događaja i pobliže ga objasnite. Nemojte zaboraviti
        ostaviti svoje kontakte podatke kako bismo Vas mogli kontaktirati u vezi
        dodatnih detalja i potvrđivanja rezervacije.
      </MainDescription>
      <FormContainer>
        <FormHeader>Naziv događaja:</FormHeader>
        <FormInput
          name="title"
          type="text"
          onChange={handleChange}
          value={post.name}
          required="required"
        />
        <FormHeader>Opis događaja:</FormHeader>
        <FormInputText
          placeholder="OPIŠITE SVOJ DOGAĐAJ..."
          name="description"
          type="text"
          maxLength="500"
          onChange={this.handleCharCount}
          required="required"
        />
        <FormInputTextCharacterCounter>
          {this.state.charCounter} / 500 znakova
        </FormInputTextCharacterCounter>
        <FormHeader>Vaši kontakt podaci:</FormHeader>
        <FormContainerInfoGroup>
          <FormInlineInput>
            <FormInlineLabel>Ime i prezime</FormInlineLabel>
            <FormInput
              name="name"
              type="text"
              onChange={handleChange}
              required="required"
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Organizacija (neobavezno)</FormInlineLabel>
            <FormInput
              name="organization"
              type="text"
              onChange={handleChange}
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>E-mail adresa</FormInlineLabel>
            <FormInput
              name="email"
              type="email"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              onChange={handleChange}
              required="required"
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
            <FormInput
              name="tel"
              type="tel"
              pattern="(\+[0-9]{0,16})|[0-9]{0,15}"
              onChange={handleChange}
              required="required"
            />
          </FormInlineInput>
        </FormContainerInfoGroup>
      </FormContainer>
    </MainContainer>
  );
};
