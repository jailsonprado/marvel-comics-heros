import { Text } from '@/components/atoms/text/text';
import React from 'react';
import * as S from './alert-message.styles';

interface Props {
  visible: boolean;
}

export const AlertMessage: React.FC<Props> = ({ visible }) => {
  if (visible)
    return (
      <S.AlertWrapper>
        <Text
          component="span"
          color="#ffffff"
          fontWeight={'bold'}
          text="Máximo de 5 heróis favoritos atingidos!"
        />{' '}
      </S.AlertWrapper>
    );
  return null;
};
