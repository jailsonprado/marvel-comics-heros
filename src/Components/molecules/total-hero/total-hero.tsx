import * as S from './total-hero.styles';
import { Text } from '@/components/atoms';

interface Props {
  itemPerPage: number;
}

export const TotalHero: React.FC<Props> = ({ itemPerPage }) => {
  return (
    <S.WrapperItem>
      <Text
        component="span"
        text={`Encontramos ${itemPerPage} heróis`}
        fontSize={18}
        color="#696969"
      />
    </S.WrapperItem>
  );
};
