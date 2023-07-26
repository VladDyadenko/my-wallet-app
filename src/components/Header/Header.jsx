import { Button } from "@mui/material";
import {
  ConnectWrapper,
  HeroContainer,
  WalletDescr,
  WalletInfoWrapper,
} from "./Header.styled";
import { getAccount, getBalance } from "../../utils/API/ether";
import { ApiContext } from "../../contextApi/ApiContext";
import { useContext } from "react";
import { ethers } from "ethers";

function Header() {
  const {
    setAccount,
    // walletAddress,
    // walletBalance,
    setWalletBalance,
    setWalletAddress,
  } = useContext(ApiContext);

  const handleOpenMask = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const data = await getAccount();
        setAccount(data);
        if (data[0]) {
          let trimmedData =
            data[0].substring(0, 6) +
            "..." +
            data[0].substring(data[0].length - 4, data[0].length);
          setWalletAddress(trimmedData);
          console.log(ethers.providers);
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          const etherBalance = await getBalance(data);
          console.log(etherBalance);
        }
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
            <WalletDescr>Balans</WalletDescr>
            <WalletDescr>Address wallet</WalletDescr>
          </WalletInfoWrapper>

          <Button variant="contained" size="smole" onClick={handleOpenMask}>
            Connect Mask
          </Button>
        </ConnectWrapper>
      </HeroContainer>
    </section>
  );
}

export default Header;
