import * as S from './card-hero.styles';

import { Favorito01Svg, Favorito02Svg } from '@/assets/svg/svg-mapped';
import { Text, Image } from '../../atoms';

interface CardHeroProps {
  source: string;
  altImage: string;
  legend: string;
  id: number;
  handleClick: () => void;
  handleRemove: () => void;
  navigateTo: (id: number) => void;
  isFavorited: boolean;
}

export const CardHero: React.FC<CardHeroProps> = ({
  source,
  altImage,
  legend,
  handleClick,
  handleRemove,
  isFavorited,
  navigateTo,
  id,
}) => {
  return (
    <S.Wrapper>
      <S.Container data-testid="hero-card">
        <S.WrapperImage data-testid="card-image" onClick={() => navigateTo(id)}>
          <S.ImageCard
            descriptionAlt={altImage}
            src={source}
            handleClick={() => navigateTo(id)}
            data-testid="image-hero"
          />
        </S.WrapperImage>
        <S.TextContainer>
          <Text
            component="p"
            text={legend}
            color="#000"
            width={130}
            height={20}
          />
          {isFavorited && (
            <Image
              descriptionAlt="favorite logo remove"
              src={Favorito01Svg}
              handleClick={handleRemove}
              dataTestid="add-favorite-button"
            />
          )}
          {!isFavorited && (
            <Image
              descriptionAlt="favorite logo add"
              src={Favorito02Svg}
              handleClick={handleClick}
              dataTestid="add-favorite-button"
            />
          )}
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  );
};
