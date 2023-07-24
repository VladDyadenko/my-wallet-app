import { Button, TextField } from "@mui/material";
import { Form, FormContainer, WalletTitle } from "./WalletForm.styled";
import { useEffect, useState } from "react";
import ModalWallet from "../ModalWallet/ModalWallet";

function WalletForm() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [buttonInfoText, setButtonInfoText] = useState("Connect Wallet");
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(isOpenModal);
  console.log(walletAddress);

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, []);

  const handleConnectWallet = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        const address = accounts[0];
        setWalletAddress(address);
        setButtonInfoText("Wallet Connected");
      })
      .catch((error) => {
        console.error("Error connecting wallet:", error);
      });
  };

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
                sx={{
                  backgroundColor:
                    buttonInfoText === "Connect Wallet" ? "#1976d2" : "#2E8B57",
                  "&:hover": {
                    backgroundColor:
                      buttonInfoText === "Connect Wallet"
                        ? "#135293"
                        : "#1C704B",
                  },
                }}
                onClick={handleConnectWallet}
              >
                {buttonInfoText}
              </Button>
            </Form>
          </FormContainer>
        </>
      </section>
    </main>
  );
}

export default WalletForm;
