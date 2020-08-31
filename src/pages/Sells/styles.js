import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  height: 100%;
  padding: 0 20px;

  @media (min-width: 1152px) {
    padding: 0;
    display: flex;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-weight: unset;
  font-size: 26px;
`;

export const Total = styled.p`
  font-size: 18px;

  @media (min-width: 1152px) {
    font-size: 20px;
  }
`;

export const Item = styled(Link)`
  height: 50px;
  background: #fafafa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }

  @media (min-width: 1152px) {
    height: 70px;
    padding: 0 20px;
  }
`;

export const Name = styled.p`
  font-size: 18px;

  @media (min-width: 1152px) {
    font-size: 26px;
  }
`;

export const Badges = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.p`
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${props => (props.fill ? '#6688FF' : null)};
  border: ${props => (props.border ? 1 : 0)}px solid #6688ff;
  color: ${props => (props.border ? '#6688FF' : '#fff')};

  & + & {
    margin-left: 10px;
  }

  @media (min-width: 1152px) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  width: 100%;

  @media (min-width: 1152px) {
    height: ${props => props.height}px;
    padding: 0 50px;
  }
`;

export const Scroll = styled(PerfectScrollbar)``;

export const List = styled.section`
  height: 100%;

  @media (min-width: 1152px) {
    height: ${props => props.height - 205}px;
  }
`;
