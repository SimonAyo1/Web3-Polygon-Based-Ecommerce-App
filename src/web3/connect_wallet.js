// import React from "react";
// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { NotificationManager } from "react-notifications";
// import { useSelector, useDispatch } from "react-redux";
// import { addressActions } from "../store/web3/addressSlice";
// import { web3Actions } from "../store/web3/web3Slice";
// import "../styles/connect.css";
// import { Web3Button } from '@web3modal/react'

// const createNotification = (type) => {
//   switch (type) {
//     case "info":
//       NotificationManager.info("");
//       break;
//     case "success":
//       NotificationManager.success("Successfully Connected", "Title here", 3000);
//       break;
//     case "warning":
//       NotificationManager.warning(
//         "Please Connect Your Wallet",
//         "Close after 3000ms",
//         3000
//       );
//       break;
//     case "error":
//       NotificationManager.error("Connection Unsuccesful", "Error", 3000);
//       break;
//   }
// };

// const providerOptions = {
//   /* See Provider Options Section */
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       infuraId: "c1dc568ae1d546c999a31dfb652df445",
//     },
//   },
// };

// export default function ConnectWallet() {
//   const account_spliced = useSelector(
//     (state) => state?.account?.account_spliced
//   );
//   const dispatch = useDispatch();
//   const connect = async () => {
//     const web3Modal = new Web3Modal({
//       network: "mainnet", // optional
//       cacheProvider: true, // optional
//       providerOptions, // required
//     });
//     try {
//       const provider = await web3Modal.connect();
//       const web3 = new Web3(provider);
//       const accounts = await web3.eth.getAccounts();
//       const addressSpliced = accounts[0];
//       const one = addressSpliced.slice(0, 5);
//       const two = addressSpliced.slice(38, 42);
//       dispatch(
//         addressActions.addAccountSpliced({ account_spliced: `${one}...${two}` })
//       );
//       dispatch(addressActions.addAccount({ account: accounts[0] }));
//       dispatch(web3Actions.addWeb3({ web3: web3 }));
//       createNotification("success");
//     } catch (error) {
//       createNotification("error");
//     }
//   };

//   return (
//     <span
//       className="connect-button"
//       style={{ fontSize: 17, cursor: "pointer" }}
//       onClick={() => {
//         connect();
//       }}
//     >
//       {account_spliced !== null ? account_spliced : "Connect Wallet"}
//     </span>
//   );
// }
