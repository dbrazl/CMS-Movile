import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { createSessionRequest } from '~/store/modules/auth/actions';

import View from './view';

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const reasons = useSelector(state => state.auth.error.reasons);
  const error = useSelector(state => state.auth.error.status);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  function resize() {
    console.log('resize');
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function submit(event) {
    event.preventDefault();

    const body = {
      username,
      password,
    };

    dispatch(createSessionRequest(body));
  }

  return (
    <View
      width={width}
      height={height}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      reasons={reasons}
      error={error}
      submit={submit}
    />
  );
}

export default Index;
