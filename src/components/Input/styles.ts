import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
