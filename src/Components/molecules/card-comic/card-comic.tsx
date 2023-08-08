import * as S from './card-comic.styles';

interface Props {
  title: string;
  imageUrl: string;
}

export const ComicCard: React.FC<Props> = ({ title, imageUrl }) => {
  return (
    <S.CardContainer>
      <S.ComicImage src={imageUrl} alt={title} />
      <S.ComicTitle>{title}</S.ComicTitle>
    </S.CardContainer>
  );
};
