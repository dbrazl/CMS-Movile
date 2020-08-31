import styled from 'styled-components';
import { FiLogOut, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: ${props => (props.back ? 'block' : 'none')};
  position: relative;
  height: 100px;

  @media (min-width: 1152px) {
    display: flex;
    align-items: center;
    justify-content: ${props => (props.back ? 'space-between' : 'flex-end')};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  display: ${props => (props.back ? 'block' : 'none')};

  @media (min-width: 1152px) {
    display: flex;
  }
`;

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  background: #eee;
`;

export const Name = styled.p`
  font-size: 18px;
  margin-right: 10px;
`;

export const Modal = styled.div`
  padding: 10px;
  min-width: 150px;
  background: #fff;
  z-index: 1;
  box-shadow: 2px 7px 7px rgba(0, 0, 0, 0.16);
  position: absolute;
  right: 0px;
  top: 100px;
`;

export const Option = styled.button`
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  cursor: pointer;
`;

export const SignOut = styled(FiLogOut)`
  width: 25px;
  height: 25px;
  color: #808080;
  margin-right: 10px;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 18px;
`;

export const Arrow = styled(FiChevronLeft)`
  width: 25px;
  height: 25px;
  color: #000;
`;
