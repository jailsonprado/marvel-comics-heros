import { styled } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const PageButton = styled.button<{ active: string }>`
  margin: 4px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active === 'true' ? '#E92429' : '#fff'};
  color: ${(props) => (props.active === 'true' ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active === 'true' ? '#E92429' : '#f0f0f0'};
  }
`;
