import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background, Img } from './styles';
import logors from '../../assets/logors.png';
import logoacai from '../../assets/logoacai.svg';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import getValidationErrors from '../../utils/getValidationErrors';

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
    try {
      // zerar os erros
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O e-mail é obrigatório!')
          .email('Digite um e-mail válido!'),
        password: Yup.string().required('Senha obrigatória!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoacai} alt="AcaiApp" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
        <Img src={logors} alt="developer" />
      </Content>
      <Background />
    </Container>
  );
};

export default LogIn;
