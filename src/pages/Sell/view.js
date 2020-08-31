import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {
  Container,
  Form,
  Wrapper,
  Title,
  Information,
  Column,
  TotalWrapper,
  Label,
  Field,
  Table,
  Scroll,
  Line,
} from './styles';
import Menu from '~/components/Menu';
import Header from '~/components/Header';

function View({ width, height, name, company, date, total, sells }) {
  const totalFormatted = total
    ? total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : [];

  const dateFormmatted = date
    ? format(new Date(date), 'dd/MM/yyyy')
    : '01/01/2000';

  function renderLines(item) {
    const price = parseFloat(item.price.toFixed(2)).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
      <Line>
        <Field width={200} widthPercent="20%">
          {item.name}
        </Field>
        <Field width={200} widthPercent="20%">
          {item.quantity}
        </Field>
        <Field width={200} widthPercent="20%">
          {price}
        </Field>
        <Field width={200} widthPercent="20%">
          {item.modules_quantity}
        </Field>
      </Line>
    );
  }

  return (
    <Container height={height}>
      {width > 1152 && <Menu width={width} height={height} />}
      <Form height={height}>
        <Header back />
        <Wrapper>
          <Title>{name}</Title>
          <Information>{dateFormmatted}</Information>
        </Wrapper>
        <Column>
          <Field>{company}</Field>
          <TotalWrapper>
            <Label>Total</Label>
            <Field width={totalFormatted.length * 10}>{totalFormatted}</Field>
          </TotalWrapper>
        </Column>
        <Wrapper marginTop={20}>
          <Title>Items</Title>
          <Information>total: {sells.length}</Information>
        </Wrapper>
        <Table width={width}>
          <Scroll>
            <Line>
              <Label width={200} widthPercent="20%">
                Nome
              </Label>
              <Label width={200} widthPercent="20%">
                Quantidade
              </Label>
              <Label width={200} widthPercent="20%">
                Subtotal
              </Label>
              <Label width={200} widthPercent="20%">
                Módulos
              </Label>
            </Line>
            {sells.map(renderLines)}
          </Scroll>
        </Table>
      </Form>
    </Container>
  );
}

View.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  company: PropTypes.string,
  sells: PropTypes.array,
};

View.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  name: 'Pedido',
  company: 'Empresa',
  sells: [],
};

export default View;
