import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`;
