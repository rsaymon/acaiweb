import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Background,
  Img,
  ImgLogo,
  AnimationContainer,
} from './styles';
import logors from '../../assets/logors.png';
import logoacai from '../../assets/logoacai.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro. Cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ImgLogo src={logoacai} alt="AcaiApp" />
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
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
          <Img src={logors} alt="developer" />
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
