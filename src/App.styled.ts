import styled from 'styled-components';

export const Row = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export const Square = styled.div`
  border: 1px solid #000;
  float: left;
  font-size: 20px;
  text-align: center;
  padding: 15px 0 0 0;
  width: 40px;
  height: 40px;
`;

export const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export const LabelText = styled.div`
  margin: 10px 0;
`;

export const RestartButton = styled.button`
  margin: 10px 0;
  padding: 5px 7px;
  color: #fff;
  background-color: #000;
`;