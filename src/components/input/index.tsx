import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
// import Tooltip from '../Tooltip/index';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// ao criar uma função dentro de outra função, ela vai ser sempre chamada caso algo mudar. Então
// em vez de function, usar hook do react (usecallback) -> função dentro de função que ficam salvas.

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // campo passado no fieldname, ref = acesso ao input no html, path = valor que ta no inputs
  // default value = caso queira o input já preenchido
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // vai disparar caso as variáveis registradas abaixo ([]) mudem. Como não tem, não será recriada.
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
    // se inputRef.current.value tiver algo, true, se não, false.
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // vai disparar caso as variáveis registradas abaixo (fieldname e registerfield) mudem.
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c533030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
