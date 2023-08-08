import { useCallback, useEffect, useState } from 'react';
import { api } from '@/services/api';
import { useAppSelector } from '@/redux/types/types';
import { useHomeContext } from '@/context/useHomeContext';
import { CharacterPaylod } from '@/types/types-response';

export interface Error {
  response?: {
    data: {
      code: number;
      message: string;
    };
  };
}

const itemsPerPage = 20;

export function useMarvelData() {
  const { publicKey, hash, time } = useHomeContext();
  const [data, setData] = useState<CharacterPaylod[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState<Error>();
  const { toggleActive } = useAppSelector(
    (rootReducer) => rootReducer.heroSlice,
  );

  const fetchDataHero = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        let apiEndpoint = `characters?offset=${page}&ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${itemsPerPage}`;

        if (searchValue) {
          apiEndpoint += `&nameStartsWith=${searchValue}`;
        }
        if (!toggleActive) {
          apiEndpoint += `&orderBy=-name`;
        }

        const response = await api.get(apiEndpoint);

        setData(response.data.data.results);
        setTotalItems(response.data.data.total);
        setTotalPages(Math.ceil(response.data.data.total / itemsPerPage));
        setCurrentPage(page);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [hash, publicKey, searchValue, time, toggleActive],
  );

  useEffect(() => {
    fetchDataHero(currentPage);
  }, [
    currentPage,
    publicKey,
    hash,
    time,
    searchValue,
    toggleActive,
    fetchDataHero,
  ]);

  const handlePageChange = (page: number) => {
    fetchDataHero(page);
  };

  return {
    data,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
    setSearchValue,
    searchValue,
    totalItems,
    error,
  };
}
