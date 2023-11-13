import { useSelector } from "react-redux";

export const usePay = () => {
  const web3 = useSelector((state) => state.web3.web3);
  const coin = useSelector((state) => state.coin.coin);
  const FROM = useSelector((state) => state.account.account);
  const Pay = () => {
   
  
     return coin;
  };
  return Pay;
};
