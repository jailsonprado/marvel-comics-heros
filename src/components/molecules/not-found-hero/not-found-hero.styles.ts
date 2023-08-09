import { Image } from '@/components/atoms/image/image';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;
