import styled from 'styled-components';

export const Container = styled.div`
  background: #30165f;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #a4a4a4;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
