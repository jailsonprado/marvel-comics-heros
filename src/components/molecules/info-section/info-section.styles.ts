import { Image, Text } from '../../atoms';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const IconInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  min-height: 50px;
`;

export const InfoText = styled(Text)`
  font-size: 18px;
  font-weight: 300;
  margin-left: ${(props) => props.marginLeft || 0}px;
`;

export const ResponsiveImage = styled(Image)`
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const StarIcon = styled(Image)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperText = styled.div`
  display: flex;
  margin-top: 20px;
`;
