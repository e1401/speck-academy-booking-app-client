import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 632px;
  height: 250px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #ffffff;
  text-align: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Button = styled.div`
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  &:hover {
    background-color: #229c7f;
  }
`;

export const ButtonText = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 14px;
  text-decoration: none;
`;
