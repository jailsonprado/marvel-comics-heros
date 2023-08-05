import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export const useRequest = (apiCall: () => Promise<AxiosResponse<any>>, setData: (data: any) => void) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await apiCall()
        setData(response.data)
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setData(null)
        setError("Error: " + JSON.stringify(error));
      }
    };
    fetchData();
  }, [apiCall, setData]);

  return [loading, error];
};