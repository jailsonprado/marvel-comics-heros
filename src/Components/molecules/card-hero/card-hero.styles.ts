import { Image } from '@/components/atoms';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 200px;
  min-height: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    width: 120px;
    min-height: 120px;
    height: 180px;
    padding: 5px;
    background: #ffffff;
  }
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
  @media (max-width: 600px) {
    width: 118px;
    height: 130px;
  }
`;

export const ImageCard = styled(Image).attrs({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  maxHeight: '100%',
})``;
