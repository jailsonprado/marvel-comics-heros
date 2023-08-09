import { Favorito01Svg, Favorito02Svg } from '@/assets/svg/svg-mapped';
import { Image, Text } from '../../atoms';
import * as S from './description-hero.styles';

interface Props {
  hero?: string;
  description?: string;
  isFavorited?: boolean;
  handleClick: () => void;
  handleRemove: () => void;
}

export const DescriptionHero: React.FC<Props> = ({
  description,
  hero,
  handleClick,
  handleRemove,
  isFavorited,
}) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text component="h1" text={hero} fontSize={40} />
        {isFavorited && (
          <Image
            descriptionAlt="favorite logo remove"
            src={Favorito01Svg}
            handleClick={handleRemove}
            dataTestid="add-favorite-button"
            width={30}
            marginLeft={'auto'}
          />
        )}
        {!isFavorited && (
          <Image
            descriptionAlt="favorite logo add"
            src={Favorito02Svg}
            handleClick={handleClick}
            dataTestid="add-favorite-button"
            width={30}
            marginLeft={'auto'}
          />
        )}
      </S.TitleWrapper>
      <S.DescriptionWrapper>
        <S.DescriptionText
          color="#8C8C8C"
          fontSize={18}
          component="p"
          text={description}
        />
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
