import { Button } from "@mui/material";
import {
  ConnectWrapper,
  HeroContainer,
  WalletDescr,
  WalletInfoWrapper,
} from "./Header.styled";
import { getAccount, getBalance } from "../../utils/API/ether";
import { ApiContext } from "../../contextApi/ApiContext";
import { useContext, useState } from "react";
import { Audio } from "react-loader-spinner";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    setAccount,
    walletAddress,
    walletBalance,
    setWalletBalance,
    setWalletAddress,
  } = useContext(ApiContext);

  const handleOpenMask = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        setIsLoading(true);
        const data = await getAccount();
        setAccount(data);
        if (data[0]) {
          let trimmedData =
            data[0].substring(0, 6) +
            "..." +
            data[0].substring(data[0].length - 4, data[0].length);
          setWalletAddress(trimmedData);
        }
        const etherBalance = await getBalance(data);
        setWalletBalance(etherBalance);
        setIsLoading(false);
        if (!Error) {
          setWalletAddress("Connect!");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <HeroContainer>
        <p>LOGO</p>
        <ConnectWrapper>
          <WalletInfoWrapper>
            <WalletDescr>
              Balans: {walletBalance ? walletBalance.slice(0, 7) : "0.0"}
            </WalletDescr>
          </WalletInfoWrapper>

          <Button
            variant="contained"
            size="smole"
            onClick={handleOpenMask}
            sx={{
              fontSize: "14px",
              backgroundColor: "#2E8B57",
              "&:hover": {
                backgroundColor: "#1C704B",
              },
              textTransform: "capitalize",
            }}
          >
            {isLoading ? (
              <Audio
                height="25"
                width="135"
                color="#FFFFFF"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
              />
            ) : walletAddress ? (
              `Wallet ${walletAddress}`
            ) : (
              "Connect MetaMask"
            )}
          </Button>
        </ConnectWrapper>
      </HeroContainer>
    </section>
  );
}

export default Header;
