import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Tab, Modal, Close, Nav, Box } from './styles';

function Menu({ width, height }) {
  const [modal, setModal] = useState(false);

  function onClickMenu() {
    setModal(!modal);
  }

  function renderModal() {
    return (
      <Modal>
        <Close onClick={onClickMenu} />
        <Tab to="/sells" selected>
          Vendas
        </Tab>
      </Modal>
    );
  }

  function renderMenu() {
    return (
      <Nav>
        <Tab to="/sells">
          <Box />
        </Tab>
      </Nav>
    );
  }

  return (
    <Container height={height}>
      {width < 1152 && <Grid onClick={onClickMenu} />}
      {width >= 1152 && renderMenu()}
      {modal && renderModal()}
    </Container>
  );
}

Menu.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Menu.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Menu;
