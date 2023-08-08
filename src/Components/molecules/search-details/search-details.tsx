import { IcBuscaMenorSvg } from '@/assets/svg/svg-mapped';
import * as S from './search-details.styles';

type NavBarProps = {
  handleChange: () => void;
  placeholder: string;
};

export const SearchHeroDetails: React.FC<NavBarProps> = ({
  handleChange,
  placeholder,
}) => {
  return (
    <S.StyledSearch>
      <S.SearchIcon src={IcBuscaMenorSvg} data-testid="icone-de-busca" />
      <S.SearchInput
        onClick={handleChange}
        data-testid="search"
        placeholder={placeholder}
      />
    </S.StyledSearch>
  );
};
