import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logoacai.svg';
import Button from '../../components/button/index';
import Input from '../../components/input/index';

const LogIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="AcaiApp" />
      <form>
        <h1>VAMOS PEDIR?</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">ENTRAR</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default LogIn;
