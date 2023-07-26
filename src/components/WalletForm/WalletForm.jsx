import { Button, TextField } from "@mui/material";
import { Form, FormContainer, WalletTitle } from "./WalletForm.styled";
import { useEffect, useState } from "react";
import ModalWallet from "../ModalWallet/ModalWallet";
// import { ethers } from "ethers";

function WalletForm() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [walletAddress, setWalletAddress] = useState(null);
  // const [buttonInfoText, setButtonInfoText] = useState("Connect Wallet");
  // const [walletUserBallans, setWalletUserBallans] = useState(null);
  // const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, []);

  

  return (
    <main>
      <section>
        <>
          {isOpenModal && (
            <ModalWallet
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
            />
          )}
          <WalletTitle>My Wallet </WalletTitle>
          <FormContainer>
            <Form>
              <TextField
                type="text"
                name="wallet address"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                size="small"
                margin="normal"
                fullWidth={true}
                //   value={name}
                //   onChange={handlChange}
                label="wallet address"
                placeholder="enter your wallet address"
                variant="outlined"
              />
              <TextField
                type="number"
                name="wallet balance"
                //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                size="small"
                margin="normal"
                fullWidth={true}
                //   value={name}
                //   onChange={handlChange}
                label="wallet balance"
                //   placeholder="enter your wallet address"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                // sx={{
                //   backgroundColor:
                //     buttonInfoText === "Connect Wallet" ? "#1976d2" : "#2E8B57",
                //   "&:hover": {
                //     backgroundColor:
                //       buttonInfoText === "Connect Wallet"
                //         ? "#135293"
                //         : "#1C704B",
                //   },
                // }}
                // onClick={handleConnectWallet}
              >
                {/* {buttonInfoText} */}
              </Button>
            </Form>
          </FormContainer>
        </>
      </section>
    </main>
  );
}

export default WalletForm;
