import { styled } from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  border-radius: 25px;
  padding: 8px;
  width: 80%;
  @media (max-width: 900px) {
    width: 80%;
    margin-top: 20px;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 16px;
  margin-right: 16px;
  width: 20px;

  @media (max-width: 600px) {
    margin-left: 8px;
    margin-right: 8px;
    width: 30px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  height: 30px;
  color: red;
`;
