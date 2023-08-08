import { useEffect, useState } from 'react';
import { IcBuscaMenorSvg } from '@/assets/svg/svg-mapped';
import useDebounce from '@/hooks/use-debounce/use-debounce';
import * as S from './search-home.styles';

type NavBarProps = {
  value: string;
  handleChange: (search: string) => void;
};

export const SearchHero: React.FC<NavBarProps> = ({ value, handleChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedInputValue = useDebounce(inputValue, 700);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    handleChange(debouncedInputValue);
  }, [debouncedInputValue, handleChange]);

  return (
    <S.StyledSearch>
      <S.SearchIcon src={IcBuscaMenorSvg} data-testid="icone-de-busca" />
      <S.SearchInput
        value={inputValue}
        onChange={handleInputChange}
        data-testid="search"
        placeholder="Procure por heróis"
        autoFocus
      />
    </S.StyledSearch>
  );
};
