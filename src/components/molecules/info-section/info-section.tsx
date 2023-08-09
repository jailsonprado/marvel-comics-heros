import {
  AvaliacaoOnSvg,
  IcQuadrinhosSvg,
  IcTrailerSvg,
} from '@/assets/svg/svg-mapped';
import * as S from './info-section.styles';
import { Text } from '@/components/atoms/text/text';

interface Props {
  comicsCount?: number;
  moviesCount?: number;
  rating: number;
  date?: string;
}

export const InfoSection: React.FC<Props> = ({
  comicsCount,
  moviesCount,
  rating,
  date,
}) => {
  const maxStars = 5;
  const starsArray = new Array(Math.min(rating, maxStars)).fill(null);

  return (
    <S.Wrapper>
      <S.Container>
        <S.InfoWrapper>
          <Text
            component="span"
            text="Quadrinhos"
            fontSize={18}
            fontWeight={300}
          />
          <S.IconInfoWrapper>
            <S.ResponsiveImage
              src={IcQuadrinhosSvg}
              descriptionAlt="comics-icon"
              width={40}
            />
            <S.InfoText
              component="span"
              text={comicsCount?.toString()}
              marginLeft={20}
            />
          </S.IconInfoWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <Text
            component="span"
            fontSize={18}
            text="Filmes"
            fontWeight={300}
            width={90}
          />
          <S.IconInfoWrapper>
            <S.ResponsiveImage
              src={IcTrailerSvg}
              descriptionAlt="movies-icon"
              width={40}
            />
            <S.InfoText
              component="span"
              text={moviesCount?.toString()}
              marginLeft={30}
            />
          </S.IconInfoWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoText
            component="span"
            fontSize={18}
            text="Rating"
            fontWeight={300}
            marginRight={20}
          />
          <S.IconInfoWrapper>
            {starsArray.map((_, index) => (
              <S.StarIcon
                key={index}
                src={AvaliacaoOnSvg}
                descriptionAlt={`star-icon-${index}`}
              />
            ))}
          </S.IconInfoWrapper>
        </S.InfoWrapper>
      </S.Container>
      <S.WrapperText>
        <Text component="span" text="Último quadrinho:" />
        <Text component="span" marginLeft={20} text={date} color="#8C8C8C" />
      </S.WrapperText>
    </S.Wrapper>
  );
};
