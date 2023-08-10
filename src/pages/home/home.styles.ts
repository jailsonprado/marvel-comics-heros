import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 60px;
  width: 100%;
`;
