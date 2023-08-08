import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 200px;
  min-height: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperImage = styled.div`
  width: 200px;
  height: 203px;
  background-color: #e92429;
`;
