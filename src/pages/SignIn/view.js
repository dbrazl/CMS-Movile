import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Column,
  Background,
  Form,
  Input,
  Button,
  WrapperMessage,
  Message,
} from './styles';
import Error from './components/Error';

import background from '~/assets/images/background_sign_in.jpg';

function View({
  width,
  height,
  username,
  setUsername,
  password,
  setPassword,
  reasons,
  error,
  submit,
}) {
  return (
    <Container>
      <Column width={width} height={height}>
        <WrapperMessage width={width} height={height}>
          <Message>Olá, Gestor!</Message>
        </WrapperMessage>
        <Background src={background} />
      </Column>
      <Column width={width} height={height}>
        {!error && (
          <Form width={width}>
            <Input
              placeholder="usuário"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button onClick={submit}>entrar</Button>
          </Form>
        )}
        {error && <Error reasons={reasons} />}
      </Column>
    </Container>
  );
}

View.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  reasons: PropTypes.array,
  error: PropTypes.bool,
  submit: PropTypes.func,
};

View.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  username: '',
  setUsername: () => {},
  password: '',
  setPassword: () => {},
  reasons: [],
  error: false,
  submit: () => {},
};

export default View;
