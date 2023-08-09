import { styled, keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9998;
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Spinner = styled.div`
  border: 8px solid #ed1d24;
  border-top: 8px solid transparent;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 2s linear infinite;
`;
