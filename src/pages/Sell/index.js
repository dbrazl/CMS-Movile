import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { indexOneOrderRequest } from '~/store/modules/orders/actions';

import View from './view';

function Index({ match: { params } }) {
  const { id } = params;

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const request = useSelector(state => state.orders.item);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', resize);
    dispatch(indexOneOrderRequest({ id }));

    return () => window.removeEventListener('resize', resize);
  }, []);

  function resize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <View
      width={width}
      height={height}
      name={request.name}
      company={request.company}
      date={request.createdAt}
      total={request.total}
      sells={request.sells}
    />
  );
}

export default Index;
