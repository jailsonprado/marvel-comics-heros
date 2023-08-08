import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #e7f6e7;
  width: 100%;
  min-height: 100vh;
  padding-top: 30px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  width: 90%;
  margin: 50px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
    width: 80%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 50%;

  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px solid #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LatestReleases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 60px;
`;
