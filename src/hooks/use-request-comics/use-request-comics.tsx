import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { Comics } from '@/types/types-response';
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

export function useRequestComics() {
  const { publicKey, hash, time } = useHomeContext();
  const [comics, setComics] = useState<Comics[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState<Error>();
  const { id } = useParams();

  useEffect(() => {
    const fetchComics = async (id: number) => {
      setLoadingData(true);
      try {
        const response = await api.get(
          `characters/${id}/comics?format=comic&orderBy=onsaleDate&limit=10&ts=${time}&apikey=${publicKey}&hash=${hash}`,
        );

        setComics(response.data.data.results);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchComics(Number(id));
  }, [hash, id, publicKey, time]);

  return {
    comics,
    loadingData,
    error,
  };
}
