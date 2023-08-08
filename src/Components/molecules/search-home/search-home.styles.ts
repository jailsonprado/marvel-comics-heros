import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdecec;
  border-radius: 25px;
  padding: 16px;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
  }
  @media (max-width: 900px) {
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 16px;
  margin-right: 16px;
  width: 30px;

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
