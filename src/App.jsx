import { useState } from "react";
import "./App.css";
import { ApiContext } from "./contextApi/ApiContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [account, setAccount] = useState(null);
  const [walletAddress, setWalletAddress] = useState("Connect Mask");
  const [walletBalance, setWalletBalance] = useState("");

  console.log("account ", account);
  console.log("walletAddress ", walletAddress);
  console.log("walletBalance ", walletBalance);

  return (
    <>
      <ApiContext.Provider
        value={{
          account,
          setAccount,
          walletAddress,
          setWalletAddress,
          walletBalance,
          setWalletBalance,
        }}
      >
        <HomePage />
      </ApiContext.Provider>
    </>
  );
}

export default App;
