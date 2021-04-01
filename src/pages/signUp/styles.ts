import styled from 'styled-components';
import { shade } from 'polished';
import cadastroBackgroundImg from '../../assets/cadastroBackgroundImg.jpg';

export const Container = styled.div`
  height: 100vh; //100% do viewport, da tela visivel do usuário
  display: flex;
  align-items: stretch; //faz com que os intens dentro do container tenham o tamanho total da página. Estica o máximo que puder
`;

export const Background = styled.div`
  flex: 1; //todo o espaço menos os 700px acima. flexível
  background: url(${cadastroBackgroundImg}) no-repeat center;
  background-size: cover; //cobrir o tamanho do que tem sobrando
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; //centraliza todo o conteúdo independente do eixo

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  //vai pegar somente os a que estão diretamente dentro do content
  > a {
    color: #fac617;
    display: block;
    text-decoration: none;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#fac617')};
    }
  }
`;

export const Img = styled.img`
  margin-top: 20px;
  width: 42px;
  height: 42px;
  border-radius: 50px;
`;
