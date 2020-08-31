import styled from 'styled-components';
import { FiGrid, FiX, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 50px;

  @media (min-width: 1152px) {
    height: ${props => props.height}px;
    width: 100px;
    background: #6688ff;
    align-items: flex-start;
    margin-bottom: 0px;
  }
`;

export const Grid = styled(FiGrid)`
  width: 50px;
  height: 50px;
  color: #6688ff;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled(Link)`
  font-size: 26px;
  color: ${props => (props.selected ? '#6688ff' : '#000')} !important;
  display: flex;
  justify-content: center;

  & + & {
    margin-top: 20px;
  }
`;

export const Close = styled(FiX)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 70px;
  left: 20px;
  color: #ff6a6a;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
`;

export const Box = styled(FiBox)`
  width: 50px;
  height: 50px;
  color: #fff;
`;
