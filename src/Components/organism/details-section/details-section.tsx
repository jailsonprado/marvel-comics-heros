import {
  InfoSection,
  DescriptionHero,
  ComicCard,
} from '@/components/molecules';
import { Image, Loading, Text } from '@/components/atoms';
import * as S from './detaisl-section.styles';
import { useAppDispatch, useAppSelector } from '@/redux/types/types';
import {
  addToFavoriteHero,
  removeFromFavoriteHero,
} from '@/redux/heros/heros-slice';
import { formatDate } from '@/utils/format-date';
import {
  CharacterPaylod,
  CharacterPaylodUnique,
  Comics,
} from '@/types/types-response';

interface DetailsSectionProps {
  hero: CharacterPaylodUnique | undefined;
  loading: boolean;
  comics: Comics[];
  loadingData: boolean;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({
  hero,
  loading,
  comics,
  loadingData,
}) => {
  const dispatch = useAppDispatch();
  const { favoriteHero } = useAppSelector(
    (rootReducer) => rootReducer.heroSlice,
  );

  const handleProductClick = () => {
    dispatch(addToFavoriteHero(hero as CharacterPaylod));
  };

  const handleRemoveFavoriteHero = () => {
    dispatch(removeFromFavoriteHero(Number(hero?.id)));
  };

  const isFavorited = favoriteHero.some((favorite) => favorite.id === hero?.id);

  return (
    <S.Wrapper>
      <Loading loading={loading || loadingData} />
      <S.ContentWrapper>
        <S.InfoWrapper>
          <DescriptionHero
            handleClick={handleProductClick}
            handleRemove={handleRemoveFavoriteHero}
            description={hero?.description}
            hero={hero?.name}
            isFavorited={isFavorited}
          />
          <InfoSection
            comicsCount={hero?.comics?.available}
            moviesCount={hero?.series.available}
            rating={5}
            date={formatDate(String(hero?.modified))}
          />
        </S.InfoWrapper>
        <S.ImageWrapper>
          <Image
            src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
            width={'100%'}
          />
        </S.ImageWrapper>
      </S.ContentWrapper>
      <S.LatestReleases>
        <Text component="h1" text="Últimos lançamentos" fontSize={24} />
        <S.ComicsGrid>
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              title={comic.name}
              imageUrl={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            />
          ))}
        </S.ComicsGrid>
      </S.LatestReleases>
    </S.Wrapper>
  );
};
