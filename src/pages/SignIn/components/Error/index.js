import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Message, Reason, Button } from './styles';

import { useDispatch } from 'react-redux';
import { resetError } from '~/store/modules/auth/actions';

function Error({ reasons }) {
  const dispatch = useDispatch();

  function resetAuthError() {
    dispatch(resetError());
  }

  return (
    <Container>
      <Icon />
      <Message>Não foi possível logar.</Message>
      <ul>
        {reasons.map(message => (
          <Reason>{message}</Reason>
        ))}
      </ul>
      <Button onClick={resetAuthError}>voltar</Button>
    </Container>
  );
}

Error.propTypes = {
  reasons: PropTypes.array,
};

Error.defaultProps = {
  reasons: [],
};

export default Error;
