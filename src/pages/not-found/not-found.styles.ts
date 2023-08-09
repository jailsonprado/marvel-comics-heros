import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  margin-top: 30px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  width: 300px;
  border-radius: 15px;
  cursor: pointer;
`;
