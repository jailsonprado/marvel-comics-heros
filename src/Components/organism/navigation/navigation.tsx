import * as S from './navigation.styles';
import { OrderByName, FavoriteHero, TotalHero } from '@/components/molecules';

interface Props {
  itemPerPage: number;
}

export const Navigation: React.FC<Props> = ({ itemPerPage }) => {
  return (
    <S.Container>
      <TotalHero itemPerPage={itemPerPage} />
      <OrderByName />
      <FavoriteHero />
    </S.Container>
  );
};
