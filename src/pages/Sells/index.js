import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { indexOrderRequest } from '~/store/modules/orders/actions';

import View from './view';

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const items = useSelector(state => state.orders.items);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', resize);
    dispatch(indexOrderRequest());

    return () => window.removeEventListener('resize', resize);
  }, []);

  function resize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return <View width={width} height={height} items={items} />;
}

export default Index;
