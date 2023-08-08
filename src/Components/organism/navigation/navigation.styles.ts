import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 50%;
  @media (max-width: 1400px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
