import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background, Img } from './styles';
import logors from '../../assets/logors.png';
import logoacai from '../../assets/logoacai.svg';
import Button from '../../components/button/index';
import Input from '../../components/input/index';

const SignUp: React.FC = () => {
  function handleSubmit(data: Record<string, unknown>): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoacai} alt="AcaiApp" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro!</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="Inicio">
          <FiArrowLeft />
          Voltar para o início
        </a>
        <Img src={logors} alt="developer" />
      </Content>
    </Container>
  );
};

export default SignUp;
