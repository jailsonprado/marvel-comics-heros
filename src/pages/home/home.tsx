import { useMarvelData } from '@/hooks/use-marvel-data/use-marvel-data';
import { useAppSelector } from '@/redux/types/types';
import * as S from './styles';
import { Header } from '@/components/organism/header/header';
import { SearchHero } from '@/components/molecules/search-home/search-home';
import { Navigation } from '@/components/organism/navigation/navigation';
import { CardContainer } from '@/components/organism/card-container/card-container';
import { Loading } from '@/components/atoms/loading/loading';
import { Pagination } from '@/components/atoms/pagination/pagination';
import { Footer } from '@/components/organism/footer/footer';

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
        <CardContainer data={!onlyFavorite ? data : favoriteHero} />
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
