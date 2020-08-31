import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1152px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  height: ${props => props.height * 0.6}px;
  width: ${props => props.width}px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    height: ${props => props.height * 0.4}px;
  }

  @media (min-width: 1152px) {
    height: ${props => props.height}px;
    width: ${props => props.width * 0.6}px;

    & + & {
      width: ${props => props.width * 0.4}px;
    }
  }
`;

export const Form = styled.form`
  width: ${props => props.width - 40}px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const Input = styled.input`
  font-size: 26px;
  color: #000;
  width: 100%;
  height: 45px;
  text-align: center;

  & + & {
    margin-top: 20px;
  }

  &::placeholder {
    color: #000;
  }
`;

export const Background = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: #6688ff;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
`;

export const WrapperMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.height * 0.6}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1152px) {
    width: ${props => props.width * 0.6}px;
    height: 100%;
  }
`;

export const Message = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #fff;

  @media (min-width: 650px) {
    top: 200px;
    font-size: 45px;
  }

  @media (min-width: 1152px) {
    font-size: 64px;
  }
`;
