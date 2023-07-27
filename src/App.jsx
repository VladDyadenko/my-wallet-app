import { useState } from "react";
import "./App.css";
import { ApiContext } from "./contextApi/ApiContext";
import HomePage from "./pages/HomePage/HomePage";
import theme from "../src/utils/API/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  const [account, setAccount] = useState(null);
  const [walletAddress, setWalletAddress] = useState("Connect MetaMask?");
  const [walletBalance, setWalletBalance] = useState("");

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
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </ApiContext.Provider>
    </>
  );
}

export default App;
