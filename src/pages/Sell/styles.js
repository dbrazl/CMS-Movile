import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  padding-top: 70px;

  @media (min-width: 1152px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const Form = styled.form`
  width: 100%;

  @media (min-width: 1152px) {
    height: ${props => props.height}px;
    padding: 0 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;

  @media (min-width: 1152px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  font-weight: unset;
  font-size: 26px;
`;

export const Information = styled.p`
  font-size: 18px;

  @media (min-width: 1152px) {
    font-size: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1152px) {
    flex-direction: row;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 1152px) {
    margin-top: 0;
    margin-left: 50px;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  margin-right: 20px;
  width: ${props => (props.width ? props.width : null)}px;
  min-width: ${props => (props.width ? props.width : null)}px;

  & + & {
    margin-left: 20px;
  }

  @media (min-width: 1152px) {
    width: ${props => (props.widthPercent ? props.widthPercent : null)};

    & + & {
      margin-left: 0px;
    }
  }
`;

export const Field = styled.p`
  font-size: 18px;
  padding: 5px 10px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: #fafafa;
  display: flex;
  align-items: center;
  width: ${props => (props.width ? props.width : null)}px;
  min-width: ${props => (props.width ? props.width : null)}px;

  & + & {
    margin-left: 20px;
  }

  @media (min-width: 1152px) {
    width: ${props => (props.widthPercent ? props.widthPercent : null)};

    & + & {
      margin-left: 0px;
    }
  }
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
`;

export const Scroll = styled(PerfectScrollbar)``;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 20px;
  }
`;
