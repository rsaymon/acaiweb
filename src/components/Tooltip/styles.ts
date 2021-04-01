import styled from 'styled-components';

export const Container = styled.div`
  position: relative; //relativo ao container e não ao restante da tela

  span {
    width: 160px;
    background: #fac617;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      //flecha para sinalizar a mensagem de erro
      content: ''; //sem o content, não exibe
      border-style: solid;
      border-color: #fac617 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
