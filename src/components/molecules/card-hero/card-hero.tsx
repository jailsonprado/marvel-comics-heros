import { Text } from '@/components/atoms/text/text';
import * as S from './card-hero.styles';
import { Favorito01Svg, Favorito02Svg } from '@/assets/svg/svg-mapped';
import { Image } from '@/components/atoms/image/image';

interface CardHeroProps {
  source: string;
  altImage: string;
  legend: string;
  id: number;
  handleClick: () => void;
  handleRemove: () => void;
  navigateTo: (id: number) => void;
  isFavorited: boolean;
  disabled: boolean;
}

export const CardHero: React.FC<CardHeroProps> = ({
  source,
  legend,
  handleClick,
  handleRemove,
  isFavorited,
  navigateTo,
  disabled,
  id,
}) => {
  return (
    <S.Wrapper>
      <S.Container data-testid="hero-card">
        <S.WrapperImage data-testid="card-image" onClick={() => navigateTo(id)}>
          <S.ImageCard
            descriptionAlt="image-hero"
            src={source}
            handleClick={() => navigateTo(id)}
            dataTestid="image-hero"
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
            <S.Button
              onClick={handleRemove}
              data-testid="remove-favorite-button"
              aria-label="Maximo 5"
            >
              <Image
                descriptionAlt="favorite logo remove"
                src={Favorito01Svg}
              />
            </S.Button>
          )}
          {!isFavorited && (
            <S.Button
              onClick={handleClick}
              data-testid="add-favorite-button"
              disabled={disabled}
            >
              <Image descriptionAlt="favorite logo add" src={Favorito02Svg} />
            </S.Button>
          )}
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  );
};
