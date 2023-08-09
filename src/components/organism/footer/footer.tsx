import { Text } from '@/components/atoms/text/text';
import * as S from './footer.styles';

export const Footer: React.FC = () => (
  <S.Container>
    <Text
      component="span"
      color="#000"
      text="Desenvolvido por Jailson Prado"
      fontSize={16}
    />
    <Text
      component="a"
      color="#fff"
      text="Data provided by Marvel. © 2023 MARVEL "
      fontSize={14}
      marginTop={10}
    />
  </S.Container>
);
