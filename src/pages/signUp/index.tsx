import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/apiClient';
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

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  interface SignUpFormData {
    name: string;
    email: string;
    password: string;
  }
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        // zerar os erros
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório!'),
          email: Yup.string()
            .required('O e-mail é obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(6, 'Mínimo de 6 digitos!'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data); // cadastrando pro banco

        history.push('/'); // enviar para a rota de login

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode realizar seu login no AppAcai!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description: 'Erro ao realizar cadastro. Tente novamente!',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <ImgLogo src={logoacai} alt="AcaiApp" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
          <Link to="/">
            <FiArrowLeft />
            Voltar para o início
          </Link>
          <Img src={logors} alt="developer" />
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
