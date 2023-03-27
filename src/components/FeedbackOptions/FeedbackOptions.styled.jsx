import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  padding-bottom: 20px;
  gap: 20px;
`;

export const Button = styled.button`
  font-size: 30px;
  background-color: transparent;
  border: 1px solid hsla(210, 18%, 87%, 2);
  border-radius: 12px;
  text-transform: capitalize;
  transition: 200ms;
  :active {
    background-color: blue;
  }
  :hover {
    background-color: blue;
  }
`;
