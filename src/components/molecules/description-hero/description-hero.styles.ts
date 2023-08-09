import { Text } from '../../atoms';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  width: 60%;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  line-height: 1.8;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DescriptionText = styled(Text)`
  width: 60%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
