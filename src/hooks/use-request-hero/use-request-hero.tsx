import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { CharacterPaylodUnique } from '@/types/types-response';
import { useHomeContext } from '@/context/useHomeContext';
import { useParams } from 'react-router-dom';

export interface Error {
  response?: {
    data: {
      code: number;
      message: string;
    };
  };
}

export function useRequestHero() {
  const { publicKey, hash, time } = useHomeContext();
  const [hero, setHero] = useState<CharacterPaylodUnique>();
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState<Error>();
  const { id } = useParams();

  useEffect(() => {
    const fetchHero = async (id: number) => {
      setLoading(true);
      try {
        const response = await api.get(
          `characters/${id}?&ts=${time}&apikey=${publicKey}&hash=${hash}`,
        );

        setHero(response.data.data.results[0]);
        setTotalItems(response.data.data.total);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero(Number(id));
  }, [hash, id, publicKey, time]);

  return {
    hero,
    loading,
    setSearchValue,
    searchValue,
    totalItems,
    error,
  };
}
