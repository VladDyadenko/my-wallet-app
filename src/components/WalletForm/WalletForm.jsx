import { Button, TextField } from "@mui/material";
import { Form, FormContainer, WalletTitle } from "./WalletForm.styled";
import { useState } from "react";
import { sendEther } from "../../utils/API/etherTransaction";
import { isAddressValid, isChecksumValid } from "../../utils/API/validation";
import { Audio } from "react-loader-spinner";

function WalletForm() {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    isAddressValid(receiverAddress);
    isChecksumValid(receiverAddress);
    await sendEther(amount, receiverAddress);
    setIsLoading(false);
  };

  return (
    <main>
      <section>
        <>
          <WalletTitle>My Wallet </WalletTitle>
          <FormContainer>
            <Form>
              <TextField
                type="text"
                name="amount"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                size="small"
                margin="normal"
                fullWidth={true}
                label="amount"
                placeholder="enter amount"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <TextField
                type="text"
                name="address"
                pattern="[0-9a-fA-F]{40}"
                required
                size="small"
                margin="normal"
                fullWidth={true}
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                label="address"
                placeholder="enter address"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                }}
                onClick={handleTransfer}
                disabled={!isAddressValid(receiverAddress)}
              >
                {isLoading ? (
                  <Audio
                    height="25"
                    width="35"
                    color="#FFFFFF"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                  />
                ) : (
                  "Send"
                )}
              </Button>
            </Form>
          </FormContainer>
        </>
      </section>
    </main>
  );
}

export default WalletForm;
