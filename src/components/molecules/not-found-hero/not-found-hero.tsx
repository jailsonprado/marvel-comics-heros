import { DeadPool2 } from '@/assets/svg/svg-mapped';
import { Text } from '@/components/atoms/text/text';

import * as S from './not-found-hero.styles';

interface Props {
  visible: boolean;
}

export const NotFoundHero: React.FC<Props> = ({ visible }) => {
  if (visible)
    return (
      <S.Container>
        <Text
          component="h1"
          text="Nenhum herói favorito encontrado!"
          color="#696969"
        />
        <S.StyledImage
          src={DeadPool2}
          width={200}
          descriptionAlt="dead pool surpreso"
        />
        <Text
          component="h3"
          text="Adicione um herói aos favoritos"
          fontSize={22}
          color="#f00"
          fontFamily="arial"
        />
      </S.Container>
    );
};
