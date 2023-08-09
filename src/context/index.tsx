import md5 from 'md5';
import { createContext, useEffect, useState } from 'react';

interface HookProps {
  children: React.ReactNode;
}

type Props = {
  time?: number;
  publicKey?: string;
  hash?: string;
};

const InitialsValue = {
  time: 0,
  publicKey: '',
  hash: '',
};

export const HomeContext = createContext<Props>(InitialsValue);

export const HookProvider = ({ children }: HookProps) => {
  const [time, setTimeRequest] = useState<number>();
  const [publicKey, setKey] = useState<string>();
  const [hash, setHashApi] = useState<string>();

  const timeApi = Number(new Date());

  const privateKey = '4b68c34968ff1590ccbff2014b0b155d89ab4add';
  const publicKeyApi = 'c2f121d2b9742e418594ffa5adf6a5f4';
  const hashApi = md5(timeApi + privateKey + publicKeyApi);

  useEffect(() => {
    setTimeRequest(timeApi);
    setKey(publicKeyApi);
    setHashApi(hashApi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return (
    <HomeContext.Provider value={{ hash, publicKey, time }}>
      {children}
    </HomeContext.Provider>
  );
};
