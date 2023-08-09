import { TotalHero } from '@/components/molecules/total-hero/total-hero';
import * as S from './navigation.styles';
import { OrderByName } from '@/components/molecules/order-by-name/order-by-name';
import { FavoriteHero } from '@/components/molecules/favorite-hero/favorite-hero';

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
