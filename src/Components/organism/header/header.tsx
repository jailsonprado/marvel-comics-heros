import * as S from './header.styles';
import { LogoSvg } from '@/assets/svg/svg-mapped';
import { Text, Image } from '../../atoms';

export const Header: React.FC = () => (
  <S.Header>
    <Image
      descriptionAlt="logo vermelho da marvel "
      src={LogoSvg}
      width={300}
    />
    <Text
      component="p"
      color="#404040"
      text="EXPLORE O UNIVERSO"
      fontWeight={'bold'}
      fontSize={'24px'}
    />
    <Text
      component="p"
      textAlign="center"
      padding={10}
      color="#696969"
      text=" Mergulhe no dominio deslumbrante de todos os personagens classicos que
      voce ama - e aqueles que voce descobrira em breve!"
    />
  </S.Header>
);
