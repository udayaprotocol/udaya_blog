import { useEffect, useState } from "react";
import { hooks, uniPassWallet } from "./connector";

export default function useUniPass() {
  const { useProvider, useAccount, useChainId } = hooks;

  const provider = useProvider();
  const account = useAccount();
  const chainId = useChainId();
  // const [address,setAddress] = useState("")

  const connect = () => {
    return uniPassWallet.activate().catch((e) => {
      console.log(e);
    });
  };

  const connectEagerly = () => {
    return uniPassWallet.connectEagerly();
  };

  const disconnect = () => {
    return uniPassWallet.resetState();
  };

  useEffect(() => {
    uniPassWallet.provider?.on("connect", (value: any) => {

      // debugger;
      console.log(`useUniPass connect`);
      console.log(value);
      // setAddress(value)
    });
  }, []);

  return {
    connect,
    chainId,
    connectEagerly,
    disconnect,
    provider,
    account,
  };
}