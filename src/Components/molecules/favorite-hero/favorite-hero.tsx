import { useCallback, useEffect, useState } from 'react';
import * as S from './favorite-hero.styles';
import { Text, Image } from '@/components/atoms';
import { listOnlyFavorites } from '@/redux/heros/heros-slice';
import { Favorito01Svg, Favorito02Svg } from '@/assets/svg/svg-mapped';
import { useAppDispatch } from '@/redux/types/types';

export const FavoriteHero: React.FC = () => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleActiveListFavorite = useCallback(async () => {
    return dispatch(listOnlyFavorites(favorite));
  }, [dispatch, favorite]);

  const handleOnlyFavoritesHero = () => {
    setFavorite((prevState) => !prevState);
    handleActiveListFavorite();
  };

  useEffect(() => {
    handleActiveListFavorite();
  }, [favorite, handleActiveListFavorite]);

  return (
    <S.WrapperItem>
      <Image
        src={!favorite ? Favorito02Svg : Favorito01Svg}
        descriptionAlt={!favorite ? 'favorito02-icon' : 'favorito01-icon'}
        handleClick={handleOnlyFavoritesHero}
      />
      <Text component="span" text="Somente favoritos" padding={10} />
    </S.WrapperItem>
  );
};
