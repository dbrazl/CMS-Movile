import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  HeaderList,
  Title,
  Total,
  Item,
  Name,
  Badges,
  Badge,
  Form,
  Scroll,
  List,
} from './styles';
import Menu from '~/components/Menu';
import Header from '~/components/Header';

function View({ width, height, items }) {
  function renderItem(item, index) {
    return (
      <Item key={`${index}`} to={`/sell/${item.id}`}>
        <Name>{item.name}</Name>
        <Badges name="badges">
          {item.new && <Badge>novo</Badge>}
          <Badge border>{item.status}</Badge>
        </Badges>
      </Item>
    );
  }

  function renderBoth() {
    return (
      <>
        <Header />
        <HeaderList>
          <Title>Pedidos</Title>
          <Total>{`Total : ${items.length}`}</Total>
        </HeaderList>
      </>
    );
  }

  function renderDesktop() {
    return (
      <>
        {renderBoth()}
        <List name="list" height={height}>
          <Scroll>{items.map(renderItem)}</Scroll>
        </List>
      </>
    );
  }

  function renderMobile() {
    return (
      <>
        {renderBoth()}
        <List name="list">{items.map(renderItem)}</List>
      </>
    );
  }

  return (
    <Container name="sells">
      <Menu width={width} height={height} />
      <Form height={height}>
        {width >= 1152 && renderDesktop()}
        {width < 1152 && renderMobile()}
      </Form>
    </Container>
  );
}

View.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  items: PropTypes.array,
};

View.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  items: [],
};

export default View;
