import md5 from "md5";
import React, { createContext, useEffect, useState } from "react";

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
  publicKey: "",
  hash: "",
};

export const HomeContext = createContext<Props>(InitialsValue);

export const HookProvider = ({ children }: HookProps) => {
  const [time, setTimeRequest] = useState<number>();
  const [publicKey, setKey] = useState<string>();
  const [hash, setHashApi] = useState<string>();

  const timeApi = Number(new Date());
  const privateKey = "";
  const publicKeyApi = "";
  const hashApi = md5(timeApi + privateKey + publicKeyApi);

  useEffect(() => {
    setTimeRequest(timeApi);
    setKey(publicKeyApi);
    setHashApi(hashApi);
  }, [publicKey]);

  return (
    <HomeContext.Provider value={{ hash, publicKey, time }}>
      {children}
    </HomeContext.Provider>
  );
};
