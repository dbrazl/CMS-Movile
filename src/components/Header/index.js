import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { closeSession } from '~/store/modules/auth/actions';

import {
  Container,
  Menu,
  Photo,
  Name,
  Modal,
  Option,
  SignOut,
  Back,
  Arrow,
} from './styles';

import defaultAvatar from '~/assets/vectors/default_avatar.svg';

function Header({ back, backTo }) {
  const [modal, setModal] = useState(false);
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function onClickMenu() {
    setModal(!modal);
  }

  function signOut() {
    dispatch(closeSession());
  }

  function renderModal() {
    return (
      <Modal>
        <Option onClick={signOut}>
          <SignOut />
          Sair
        </Option>
      </Modal>
    );
  }

  return (
    <Container back={back}>
      {back && (
        <Back to={backTo}>
          <Arrow />
          voltar
        </Back>
      )}
      <Menu onClick={onClickMenu}>
        <Name>{profile.name.split(' ')[0]}</Name>
        <Photo src={profile.avatar || defaultAvatar} />
      </Menu>
      {modal && renderModal()}
    </Container>
  );
}

Header.propTypes = {
  back: PropTypes.bool,
  backTo: PropTypes.string,
};

Header.defaultProps = {
  back: false,
  backTo: '/sells',
};

export default Header;
