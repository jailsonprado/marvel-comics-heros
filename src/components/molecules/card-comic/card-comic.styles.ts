import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ComicTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin: 0;
`;
