import {
  addToFavoriteHero,
  removeFromFavoriteHero,
} from '@/redux/heros/heros-slice';
import { useAppDispatch, useAppSelector } from '@/redux/types/types';
import { CharacterPaylod } from '@/types/types-response';
import { CardHero } from '../../molecules/card-hero/card-hero';
import * as S from './card-container.styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  data: CharacterPaylod[];
};

export const CardContainer: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favoriteHero } = useAppSelector(
    (rootReducer) => rootReducer.heroSlice,
  );

  const handleProductClick = (hero: CharacterPaylod) => {
    dispatch(addToFavoriteHero(hero));
  };

  const handleRemoveFavoriteHero = (hero: CharacterPaylod) => {
    dispatch(removeFromFavoriteHero(hero.id));
  };

  const handleCardClick = (id: number) => {
    navigate(`/comics/${id}`);
  };

  return (
    <S.GridContainer>
      {data.map((item: CharacterPaylod) => {
        const isFavorited = favoriteHero.some(
          (favorite) => favorite.id === item.id,
        );
        return (
          <div key={item.id}>
            <CardHero
              key={item.id}
              source={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              altImage={item?.description}
              legend={item?.name}
              handleClick={() => handleProductClick(item)}
              handleRemove={() => handleRemoveFavoriteHero(item)}
              isFavorited={isFavorited}
              disabled={favoriteHero.length >= 5}
              data-testid="card-hero"
              id={item.id}
              navigateTo={() => handleCardClick(item.id)}
            />
          </div>
        );
      })}
    </S.GridContainer>
  );
};
