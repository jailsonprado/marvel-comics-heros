import {
  Header,
  Navigation,
  CardHeroComponent,
  Footer,
} from '@/components/organism';
import { Loading, Pagination } from '@/components/atoms';
import { SearchHero } from '@/components/molecules';
import { useMarvelData } from '@/hooks/use-marvel-data/use-marvel-data';
import { useAppSelector } from '@/redux/types/types';
import * as S from './styles';

export const HomePage = () => {
  const {
    currentPage,
    totalPages,
    setSearchValue,
    searchValue,
    data,
    loading,
    totalItems,
    handlePageChange,
  } = useMarvelData();
  const { favoriteHero, onlyFavorite } = useAppSelector(
    (rootReducer) => rootReducer.heroSlice,
  );

  const handlePage = (page: number) => {
    handlePageChange(page);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <SearchHero handleChange={setSearchValue} value={searchValue} />
        <Navigation
          itemPerPage={!onlyFavorite ? totalItems : favoriteHero.length}
        />
        <CardHeroComponent data={!onlyFavorite ? data : favoriteHero} />
        <Loading loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePage}
        />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};
