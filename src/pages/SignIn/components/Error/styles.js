import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled(FiAlertTriangle)`
  width: 60px;
  height: 60px;
  color: #ff6a6a;
  margin-bottom: 20px;

  @media (min-width: 650px) {
    width: 100px;
    height: 100px;
  }
`;

export const Message = styled.p`
  font-size: 26px;
  color: #000;
  margin-bottom: 20px;
`;

export const Reason = styled.li`
  list-style: none;
  margin-top: 10px;
  font-size: 18px;
  text-align: center;

  @media (min-width: 650px) {
    font-size: 22px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: #6688ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 26px;
  margin-top: 50px;
  cursor: pointer;
`;
