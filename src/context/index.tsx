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

  const privateKey = 'a2d0927ae7143a3ab8c7b7b6b6993b3b27250fe4';
  const publicKeyApi = 'b3880a065a6984f95c2e51cdbdc9cc5a';
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
