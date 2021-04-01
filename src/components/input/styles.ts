import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #30165f;
  border-radius: 10px;

  border: 2px solid #232129;
  color: #a4a4a4;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #fac617;
      border-color: #fac617;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #fac617;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4f4f4; //quase branco

    &::placeholder {
      color: #a4a4a4; //cinza
    }
  }
  svg {
    margin-right: 16px;
  }
`;
